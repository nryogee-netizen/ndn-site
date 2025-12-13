// Simple client-side search for the site
(function(){
  function escapeHtml(s){return s.replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;' })[c])}
  function generateId(el){ if(!el.id){ el.id = 'sect-' + Math.random().toString(36).slice(2,9); } return el.id; }

  document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById('searchBox');
    const results = document.getElementById('searchResults');
    if(!input || !results) return;

    const sections = Array.from(document.querySelectorAll('.profile-excerpt article, .profile-excerpt pre'));

    function findMatches(q){
      if(!q) return [];
      const term = q.toLowerCase();
      const matches = [];
      sections.forEach(sec => {
        const text = (sec.textContent || '').replace(/\s+/g, ' ');
        const idx = text.toLowerCase().indexOf(term);
        if(idx !== -1){
          const titleEl = sec.querySelector('h3');
          const title = titleEl ? titleEl.textContent : (sec.getAttribute('aria-label') || sec.className || 'Result');
          const start = Math.max(0, idx - 40);
          const snippet = text.substr(start, Math.min(180, text.length - start));
          matches.push({el: sec, title, snippet, idx });
        }
      });
      return matches;
    }

    function highlightQueryInSnippet(snippet, q){
      const re = new RegExp(q, 'ig');
      return escapeHtml(snippet).replace(re, m => `<span class="search-highlight">${escapeHtml(m)}</span>`);
    }

    function clearResults(){
      results.innerHTML = '';
      document.querySelectorAll('.search-highlight').forEach(el => {
        const parent = el.parentNode;
        if(!parent) return;
        parent.replaceChild(document.createTextNode(el.textContent), el);
      });
    }

    function performSearch(){
      const q = input.value.trim();
      clearResults();
      if(!q){
        return;
      }
      const matches = findMatches(q);
      if(matches.length === 0){
        results.innerHTML = '<div class="no-results">No results found.</div>';
        return;
      }
      const ul = document.createElement('ul');
      ul.className = 'search-results-list';
      matches.forEach(m => {
        const li = document.createElement('li');
        const id = generateId(m.el);
        const a = document.createElement('a');
        a.href = '#' + id;
        a.textContent = m.title;
        a.addEventListener('click', function(e){
          // smooth scroll to the section and highlight
          e.preventDefault();
          document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});
          // briefly flash highlight on the element
          m.el.classList.add('search-result-focus');
          setTimeout(()=> m.el.classList.remove('search-result-focus'), 2000);
        });

        const snippetEl = document.createElement('div');
        snippetEl.className = 'search-snippet';
        snippetEl.innerHTML = highlightQueryInSnippet(m.snippet, q);

        li.appendChild(a);
        li.appendChild(snippetEl);
        ul.appendChild(li);
      });
      results.appendChild(ul);
    }

    let timeout = null;
    input.addEventListener('input', function(){
      if(timeout) clearTimeout(timeout);
      timeout = setTimeout(performSearch, 200);
    });

    // Handle Enter to jump to first result
    input.addEventListener('keydown', function(e){
      if(e.key === 'Enter'){
        const first = results.querySelector('a');
        if(first){ first.click(); }
      }
    });
  });
})();
