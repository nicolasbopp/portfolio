export const THEME_STORAGE_KEY = "theme";

/** Runs before first paint so a saved choice is applied without a flash of the other theme. */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
