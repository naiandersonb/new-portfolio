export function changeAppTheme() {
  const htmlElement = document.documentElement
  htmlElement.classList.toggle('dark')

  if (htmlElement.classList.contains('dark')) {
    localStorage.setItem('@nb:app-theme', 'dark')
  } else {
    localStorage.setItem('@nb:app-theme', 'light')
  }
}
