function handleStickyMenu() {
  const headerElm = document.getElementById('sticky-header');

  if (window.scrollY >= 80) {
    headerElm.classList.add('active');
  } else {
    headerElm.classList.remove('active');
  }
}

export function useStickyMenu() {
  return {
    handleStickyMenu,
  };
}
