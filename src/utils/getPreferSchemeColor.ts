export function getPreferSchemeColor() {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  const htmlElement = document.documentElement
  if (darkThemeMq.matches) {
    htmlElement.classList.add('dark')
  } else {
    htmlElement.classList.remove('dark')
  }
}
