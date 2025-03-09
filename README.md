
# STEP-04. Health Doc

DAN-IT. Full Stack course. Module 04. Advanced JS
STEP PROJECT 04 | Health Doc.

# Technology Stack

HTML5, CSS3, JS.

# Contributors

Julia Verchyonova


# Tasks & Responsibilities

Julia Verchyonova:

- repository creator and holder;
- design;
- project architecture;
- HTML & CSS:
  - "Welcome" section (header, main, footer);
  - "Login" section and form;
  - "Authorized" section: filters and cards;
  - "Modal" section and form;
- API:
  - axios instance() setting;
  - getToken(body) request;
  - getAllCards() request for list of cards to render on page;
  - deleteCard(id) request for one card;
  - getCard(id) request for one card;
  - editCard(id) PUT request to edit card object on server;
  - addCard() request to add new card to server;
- utils & handlers & functions:
  - handleEnter();
  - handleLogin();
  - handleSubmit();
  - render helpers:
    - renderVisits() function;
    - renderModalMore() function;
    - renderNoItems() function;
    - changeCheckedRadio() function;
  - filtering:
    - debounce() util;
    - matchSearch() helper to iterate all fields over an object;
    - handleFilter() function;
  - validateInputs() function;
  - cookie utils: getCookie(), setCookie(), deleteCookie();
- classes:
  - "PRELOADER" class: constructor, render(parent), remove();
  - "VISIT" class: constructor, render(parent), remove(), edit(), showMore(), showLess();
  - "MODAL" class: constructor, render(parent), remove();
  - "MODALMORE" class: constructor, render(), remove();
    - "MODALMORECARDIOLOGIST" class extends "MODALMORE";
    - "MODALMORETHERAPIST" class extends "MODALMORE";
    - "MODALMOREDENTIST" class extends "MODALMORE";
- buttons & eventListeners;
- Drag & Drop;


# Web Preview link
<https://juliaagama.github.io/2025_STEP_04_advanced_JS_HealthDoc/>

login: <doctor@health-doc.com>, pass: 1234

# GitHub link

<https://github.com/JuliaAgama/2025_STEP_04_advanced_JS_HealthDoc>
