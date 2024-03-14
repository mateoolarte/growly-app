export function scrollToSection(section) {
  const sectionElm = document.getElementById(section);

  if (sectionElm) {
    window.scrollTo({
      behavior: "smooth",
      top: sectionElm?.offsetTop,
    });
  }
}
