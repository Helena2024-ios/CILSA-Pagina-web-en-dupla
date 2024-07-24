/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
    "use strict";
  
    const storedTheme = localStorage.getItem("theme");
  
    const getPreferredTheme = () => {
      if (storedTheme) {
        return storedTheme;
      }
  
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };
  
    const setTheme = function (theme) {
      if (
        theme === "" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-bs-theme", theme);
      }
    };
  
    setTheme(getPreferredTheme());
  
    const showActiveTheme = (theme) => {
      const activeThemeIcon = document.querySelector(".theme-icon-active use");
      const btnToActive = document.querySelector(
        `[data-bs-theme-value="${theme}"]`
      );
      const svgOfActiveBtn = btnToActive
        .querySelector("svg use")
        .getAttribute("href");
  
      document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
        element.classList.remove("active");
      });
  
      btnToActive.classList.add("active");
      activeThemeIcon.setAttribute("href", svgOfActiveBtn);
    };
  
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (storedTheme !== "light" || storedTheme !== "dark") {
          setTheme(getPreferredTheme());
        }
      });
  
    window.addEventListener("DOMContentLoaded", () => {
      showActiveTheme(getPreferredTheme());
  
      document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
        toggle.addEventListener("click", () => {
          const theme = toggle.getAttribute("data-bs-theme-value");
          localStorage.setItem("theme", theme);
          setTheme(theme);
          showActiveTheme(theme);
        });
      });
    });
  })();
  
  
  // Acceder al formulario
  const form = document.getElementById('contactForm');
  
  // Acceder a los campos del formulario
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const comentarioTextarea = document.getElementById('comentario');
  
  // Acceder a los mensajes de error
  const nombreErrorSpan = document.getElementById('nombreError');
  const emailErrorSpan = document.getElementById('emailError');
  const comentarioErrorSpan = document.getElementById('comentarioError');
  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Evitar que el formulario se envíe
    
      const nombreValue = nombreInput.value;
      const emailValue = emailInput.value;
      const comentarioValue = comentarioTextarea.value;
    
      // Validar los valores y mostrar mensajes de error si es necesario
      if (nombreValue === '') {
        nombreErrorSpan.textContent = 'Por favor, ingrese su nombre';
      } else {
        nombreErrorSpan.textContent = '';
      }
    });