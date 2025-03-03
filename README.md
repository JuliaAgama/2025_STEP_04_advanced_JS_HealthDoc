
# STEP-04. Health Doc

DAN-IT. Full Stack course. Module 04. Advanced JS
STEP PROJECT 04 | Health Doc.

# Technology Stack

HTML5, CSS3, JS.

# Contributors

Julia Verchyonova,
Student 2,
Student 3


# Tasks & Responsibilities

Julia Verchyonova:

- repository creator and holder;
- design;
- basic project structure, incl. HTML & CSS styles;
- card \ visit - db object structure;
- HTML & CSS:
  - "Welcome" section (header, main, footer): HTML & CSS;
  - "Login" section and form: HTML & CSS;
  - "Autorized" section: HTML & CSS:
    - Header & "add a visit" button;
    - "Filters" container and filter inputs;
    - "Visits" container and cards;
- API:
  - axios instance() setting;
  - getToken(body) request;
  - getAllCards() request for list of cards to render on page;
  - deleteCard(id) request for one card;
- utils & handlers & functions:
  - handleLEnter();
  - handleLogin();
  - cookie utils: getCookie(), setCookie(), deleteCookie();
  - handleRenderVisits() function;
  - filtering:
    - debounce() util;
    - matchSearch() helper to iterate all fields over an object;
    - handleFilter() function;
- classes:
  - PRELOADER class: constructor, render(parent), remove();
  - "VISIT" class: constructor, render(parent), remove(), showMore(), showLess();
- buttons & eventListeners logics:
  - "enter" button eventListener: handleEnter(), getCookie(token) -> to Login section or to Authorized section & handleRenderVisits();
  - "login" submit button eventListener: handleLogin(), getToken(body), setCookie(), getCookie(token) -> to Authorized section & handleRenderVisits();
  - "back" button eventListener on Login page -> to Enter page;
  - "showMore" & "showLess" buttons eventListeners -> Visit.shoMore() & Visit.showLess();
  - "delete" button eventListener: deleteCard(id) request, Visit.remove();
  - filter inputs - "content', "doctor", "status", "urgency" eventListeners: handleFilter(), debounce(function, timeout), getAllCards(),  matchSearch(card, contentFilter);

Student 2:

- API:
  - getCard(id) request for one card;
  - editCard(id) PATCH/PUT request to edit card object on server;
- utils & handlers & functions:
  - ...
- classes:
  - "VISIT" class: edit();
  - "VisitDentist", "VisitCardiologist", "VisitTherapist" (?) or "ModalDentist", "ModalCardiologist", "ModalTherapist" (?);
- buttons & eventListeners logics:
  - "edit" button eventListener: getCard(id) request, Visit.edit();
- Drag & Drop;
- ...;
- ДОПІШІТЬ СВОЄ;


Student 3:

- HTML & CSS:
  - Modal for new/edited visit;
- API:
  - postCard() request to add new card to server;
- utils & handlers & functions:
  - ...;
  - Card Modal: input validation;
  - ...;
- classes:
  - Card "MODAL" class: constructor, render(), remove();
- buttons & eventListeners logics:
  - "add card" submit eventListener: ..... send card to server, render card in total list;
  - ...;
- ДОПІШІТЬ СВОЄ;



# Web Preview link
<https://juliaagama.github.io/2025_STEP_04_advanced_JS_HealthDoc/>

login: <doctor@health-doc.com>, pass: 1234

# GitHub link

<https://github.com/JuliaAgama/2025_STEP_04_advanced_JS_HealthDoc>
