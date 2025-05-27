// todo:

// export function setTheme(theme) {
//   if (typeof window === "undefined") return;
//   if (theme === "system") {
//     localStorage.removeItem("theme");
//     const systemPrefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     document.documentElement.classList.toggle("dark", systemPrefersDark);
//   } else {
//     localStorage.theme = theme;
//     document.documentElement.classList.toggle("dark", theme === "dark");
//   }
// }

// export function initTheme() {
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "dark") {
//     document.documentElement.classList.add("dark");
//   } else if (savedTheme === "light") {
//     document.documentElement.classList.remove("dark");
//   } else {
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     document.documentElement.classList.toggle("dark", prefersDark);
//   }
// }
