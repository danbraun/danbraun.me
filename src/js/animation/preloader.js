export function removePreloader() { 
  window.addEventListener("load", () => {
  const preloader = document.querySelector("#preloader")
  preloader.style.opacity = 0
  setTimeout(() => {
    preloader.style.display = "none"
  }, 500)
})}