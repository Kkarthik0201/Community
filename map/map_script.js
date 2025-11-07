/* ECE Map search and highlight logic */
(function () {
  const mapEl = document.getElementById('eceMap');
  const searchInput = document.getElementById('roomSearch');
  const suggestionsEl = document.getElementById('suggestions');
  const pointer = document.getElementById('pointer');

  if (!mapEl || !searchInput) return;

  // Collect searchable rooms from SVG
  const roomNodes = Array.from(mapEl.querySelectorAll('.room'));
  const rooms = roomNodes.map((node) => {
    const id = node.id;
    const name = (node.getAttribute('data-name') || '').trim();
    const label = id + (name ? ` ${name}` : '');
    return { id, name, label, node };
  });

  function normalize(str) {
    return (str || '').toLowerCase().replace(/[_\-]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function getMatches(query) {
    const q = normalize(query);
    if (!q) return [];
    // Rank: startsWith on id, includes on id, includes on name
    const scored = rooms
      .map((r) => {
        const nid = normalize(r.id);
        const nname = normalize(r.name);
        let score = -1;
        if (nid.startsWith(q)) score = 100;
        else if (nid.includes(q)) score = 70;
        else if (nname.includes(q)) score = 50;
        return score >= 0 ? { room: r, score } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score);
    return scored.map((s) => s.room);
  }

  function clearHighlight() {
    roomNodes.forEach((n) => n.classList.remove('highlight'));
    pointer.setAttribute('visibility', 'hidden');
  }

  function centerOfRoom(node) {
    // Works for rect rooms
    const tag = node.tagName.toLowerCase();
    if (tag === 'rect') {
      const x = parseFloat(node.getAttribute('x') || '0');
      const y = parseFloat(node.getAttribute('y') || '0');
      const w = parseFloat(node.getAttribute('width') || '0');
      const h = parseFloat(node.getAttribute('height') || '0');
      return { cx: x + w / 2, cy: y + h / 2 };
    }
    // Fallback: bbox
    const bb = node.getBBox();
    return { cx: bb.x + bb.width / 2, cy: bb.y + bb.height / 2 };
  }

  function showPointerAt(node) {
    const { cx, cy } = centerOfRoom(node);
    pointer.setAttribute('transform', `translate(${cx}, ${cy})`);
    pointer.setAttribute('visibility', 'visible');
  }

  function highlightRoom(room) {
    clearHighlight();
    if (!room) return;
    room.node.classList.add('highlight');
    showPointerAt(room.node);
    // Ensure it is in view (for small screens)
    room.node.scrollIntoView?.({ behavior: 'smooth', block: 'center', inline: 'center' });
  }

  function buildSuggestions(items) {
    suggestionsEl.innerHTML = '';
    if (!items.length) {
      suggestionsEl.classList.remove('show');
      return;
    }
    const frag = document.createDocumentFragment();
    items.slice(0, 8).forEach((r, idx) => {
      const li = document.createElement('li');
      li.role = 'option';
      li.id = `opt-${r.id}`;
      li.innerHTML = `<strong>${r.id}</strong> <span style="opacity:.7">${r.name}</span>`;
      li.addEventListener('mousedown', (e) => {
        e.preventDefault();
        searchInput.value = r.id;
        highlightRoom(r);
        suggestionsEl.classList.remove('show');
      });
      if (idx === 0) li.setAttribute('aria-selected', 'true');
      frag.appendChild(li);
    });
    suggestionsEl.appendChild(frag);
    suggestionsEl.classList.add('show');
  }

  let lastQuery = '';
  searchInput.addEventListener('input', (e) => {
    const q = searchInput.value;
    lastQuery = q;
    const matches = getMatches(q);
    buildSuggestions(matches);
    if (matches.length === 1 && normalize(matches[0].id) === normalize(q)) {
      highlightRoom(matches[0]);
    } else {
      // Do not clear to avoid flicker while typing; only clear when query clears
      if (!q.trim()) clearHighlight();
    }
  });

  searchInput.addEventListener('keydown', (e) => {
    const open = suggestionsEl.classList.contains('show');
    if (!open) return;
    const options = Array.from(suggestionsEl.querySelectorAll('li'));
    if (!options.length) return;
    const currentIndex = options.findIndex((el) => el.getAttribute('aria-selected') === 'true');
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const dir = e.key === 'ArrowDown' ? 1 : -1;
      const next = (currentIndex + dir + options.length) % options.length;
      options.forEach((el, i) => el.setAttribute('aria-selected', i === next ? 'true' : 'false'));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const sel = options[currentIndex >= 0 ? currentIndex : 0];
      sel?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    } else if (e.key === 'Escape') {
      suggestionsEl.classList.remove('show');
    }
  });

  document.addEventListener('click', (e) => {
    if (!suggestionsEl.contains(e.target) && e.target !== searchInput) {
      suggestionsEl.classList.remove('show');
    }
  });

  // Click on map rooms also focuses and populates search
  roomNodes.forEach((n) => {
    n.style.cursor = 'pointer';
    n.addEventListener('click', () => {
      const room = rooms.find((r) => r.node === n);
      if (!room) return;
      searchInput.value = room.id;
      highlightRoom(room);
      suggestionsEl.classList.remove('show');
    });
  });

  // Preload suggestion hints on focus
  searchInput.addEventListener('focus', () => {
    if (!searchInput.value.trim()) {
      buildSuggestions(rooms.slice(0, 8));
    }
  });

  // Wrap long names within tiny labels into two lines max to avoid overflow
  function wrapTinyLabels() {
    const nameLabels = mapEl.querySelectorAll('#roomsRow text.room-sub.tiny');
    const maxBoxWidth = 90; // width of small room boxes
    const horizontalPadding = 8; // keep some breathing room
    const maxWidth = maxBoxWidth - horizontalPadding * 2;

    nameLabels.forEach((textEl) => {
      // Skip if already wrapped (has tspans)
      if (textEl.querySelector('tspan')) return;
      const full = textEl.textContent.trim();
      if (!full) return;

      // Create a measuring tspan helper
      const words = full.split(/\s+/);
      let line1 = '';
      let line2 = '';

      const measure = (str) => {
        const tmp = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        tmp.textContent = str || '';
        textEl.textContent = '';
        textEl.appendChild(tmp);
        const len = tmp.getComputedTextLength();
        textEl.removeChild(tmp);
        textEl.textContent = full; // restore
        return len;
      };

      // Build line1 within width, rest goes to line2
      for (let i = 0; i < words.length; i += 1) {
        const test = (line1 ? line1 + ' ' : '') + words[i];
        if (measure(test) <= maxWidth) {
          line1 = test;
        } else {
          // remaining words form line2
          line2 = words.slice(i).join(' ');
          break;
        }
      }

      // If a single long word exceeds width, hard break roughly mid
      if (!line1 && words.length === 1) {
        const word = words[0];
        const mid = Math.ceil(word.length / 2);
        line1 = word.slice(0, mid);
        line2 = word.slice(mid);
      }

      // If line2 is still too long, trim with ellipsis
      if (line2 && measure(line2) > maxWidth) {
        let truncated = '';
        for (let i = 0; i < line2.length; i += 1) {
          const next = truncated + line2[i];
          if (measure(next + '…') <= maxWidth) truncated = next; else break;
        }
        line2 = truncated + '…';
      }

      // Apply tspans with centered alignment
      const x = textEl.getAttribute('x');
      const y = parseFloat(textEl.getAttribute('y') || '0');
      textEl.textContent = '';
      const t1 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      t1.setAttribute('x', x);
      t1.setAttribute('dy', '0');
      t1.textContent = line1 || full;
      textEl.appendChild(t1);

      if (line2) {
        const t2 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        t2.setAttribute('x', x);
        t2.setAttribute('dy', '1.05em');
        t2.textContent = line2;
        textEl.appendChild(t2);
        // Adjust baseline so the two lines stay within the box
        textEl.setAttribute('y', String(y - 3));
      }
    });
  }

window.addEventListener("message", (event) => {
  if (event.data?.type === "highlightRoom") {
    const roomId = event.data.roomId;
    const allRooms = document.querySelectorAll(".room");
    allRooms.forEach(r => r.classList.remove("highlight")); // clear previous highlights

    const target = document.getElementById(roomId);
    if (target) {
      target.classList.add("highlight");
      const bbox = target.getBBox?.();
      if (bbox) {
        // Scroll center logic for SVG viewBox
        const mapEl = document.getElementById("eceMap");
        mapEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      }
    } else {
      console.warn("Room not found:", roomId);
    }
  }
});
  window.addEventListener('load', wrapTinyLabels);
})();