/**
 * SteadKeep website interactions
 * Intentionally dependency-free and safe when JavaScript is unavailable.
 */
(() => {
  const root = document.documentElement;
  const navToggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".site-nav");
  const header = document.querySelector("[data-site-header]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeStorageKey = "steadkeep-site-theme";

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const closeNavigation = () => {
    if (!navToggle || !navigation) return;
    navToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    const label = navToggle.querySelector(".sr-only");
    if (label) label.textContent = "Open navigation";
  };

  if (navToggle && navigation) {
    navToggle.addEventListener("click", () => {
      const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(willOpen));
      navigation.classList.toggle("is-open", willOpen);
      const label = navToggle.querySelector(".sr-only");
      if (label) label.textContent = willOpen ? "Close navigation" : "Open navigation";
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNavigation();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const wasOpen = navigation.classList.contains("is-open");
        closeNavigation();
        if (wasOpen) navToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!navigation.classList.contains("is-open")) return;
      if (!navigation.contains(event.target) && !navToggle.contains(event.target)) {
        closeNavigation();
      }
    });
  }

  const updateHeader = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const savedTheme = localStorage.getItem(themeStorageKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    root.dataset.theme = savedTheme;
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const currentDark = root.dataset.theme
        ? root.dataset.theme === "dark"
        : systemDark;
      const nextTheme = currentDark ? "light" : "dark";
      root.dataset.theme = nextTheme;
      localStorage.setItem(themeStorageKey, nextTheme);
      themeToggle.setAttribute("aria-label", `Switch to ${currentDark ? "dark" : "light"} theme`);
    });
  }
})();
