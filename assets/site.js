document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) count++;
    });
    document.getElementById('filter-status').textContent = `${count}つの事例を表示しています`;
  });
});
const toc = document.getElementById('toc');
if (toc) {
  document.querySelectorAll('.prose h2').forEach((heading, index) => {
    heading.id = `section-${index + 1}`;
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    toc.appendChild(link);
  });
}
document.querySelectorAll('.prose table').forEach(table => {
  const wrapper = document.createElement('div');
  wrapper.className = 'table-scroll';
  wrapper.tabIndex = 0;
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', '表。横にスクロールできます');
  table.parentNode.insertBefore(wrapper, table);
  wrapper.appendChild(table);
});
document.getElementById('print')?.addEventListener('click', () => window.print());
