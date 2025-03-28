
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


## Brief

You need to create a page where the Secretary can create cards describing scheduled visits to doctors.

The page should have:

1. Header of the page:

- in the upper left corner - a logo. You can take any
- in the right corner - a "Login" button. After successful authorization, it should change to the "Create Visit" button.

2. Under the Header - a form for filtering visits. This form should have 3 fields:

- search by title/content of the visit
- search by status (Open/Done) (visit has passed or not yet)
- urgency of the visit (High, Normal, Low)

3. Under the filter form - a list of created visits.

#### Technical requirements 

- When a user visits a page for the first time, the board should say `No items have been added`. The same message should be displayed if the user has no cards added (for example, they have deleted them all).
- When clicking on the **Login** button, a modal window appears in which the user enters their email and password. If it is correct, the user is shown a list of previously created visits on the page.
- When clicking on the **Create visit** button, a modal window appears in which a new card can be created.
- To create classes, you must use the `class` syntax from ES6.
- For AJAX requests, you can use `fetch` or `axios`.
- After performing any AJAX requests, the page should not be reloaded. When adding/removing a card and other similar operations from the server, the entire list of cards **should not** be reloaded. You must use data from the server response and Javascript to update the information on the page.
- When refreshing or closing the page, previously added notes should not disappear.
- It is advisable to divide the project into modules using ES6 modules.

##### Modal "Add a visit"

The modal window should have:

- A drop-down list (select) with the choice of a doctor. Depending on the selected doctor, fields that need to be filled in for a visit to this doctor will appear under this list.
- There should be three options in the list - **Cardiologist**, **Dentist**, **Therapist**.
- After selecting a doctor from the list, fields for making an appointment with this doctor should appear below it. Several fields are the same for all three doctors:
- purpose of the visit
- short description of the visit
- dropdown - urgency (regular, priority, urgent)
- Full name
- Also, each of the doctors has its own unique fields to fill in. If the **Cardiologist** option is selected, the following additional fields for entering information appear:
- normal blood pressure
- Body mass index
- previous cardiovascular diseases
- age
- If the **Dentist** option is selected, it is additionally necessary to fill in:
- date of last visit
- If the Therapist option is selected, it is additionally necessary to fill in:
- age
- `Create` button. When you click on the button, an AJAX request is sent to the appropriate address, and if the response contains information about the newly created card - a card is created in the Visits Board on the page, the modal window is closed.
- `Close` button - closes the modal window without saving information and creating a card. When you click on the area outside the modal window - the modal window is also closed.
- All input fields, regardless of the selected option, except for the field for additional comments, are mandatory for entering data. Validation for data correctness is not required.

##### Visit card

The card that is created by clicking appears on the task board.

It should contain:

- Full name that was entered when creating the card
- Doctor with whom the person has an appointment
- `Show more` button. When you click on it, the card expands and the rest of the information that was entered when creating the visit appears
- `Edit` button. When you click on it, instead of the text content of the card, a form appears where you can edit the entered fields. The same as in the modal window when creating the card
- An icon with a cross in the upper right corner, when you click on which the card will be deleted

##### Filtering

You need to do the card filter (input field for entering search text by title or description of the visit, filter by status, by priority) on the front-end - that is, when changing the `value` of any form element (selected item in the list, something entered in `input`), you filter the list of cards previously received from the server, and display the new information on the screen.


##### Classes

The JavaScript code must contain the following classes:

- Modal class (modal window);
- Visit class (which describes common fields and methods for all visits to any doctor);
- child classes VisitDentist, VisitCardiologist, VisitTherapist;

You need to think about the methods and properties of each class yourself. If necessary, you can also add other classes.

#### Design

The design can be anything, but it has to be there.

#### AJAX

All necessary documentation for interacting with the AJAX server is located [here](https://ajax.test-danit.com/api-pages/cards.html).

#### Optional task of increased complexity

- When creating a business card, validate the correctness of the entered data. You can come up with validation rules yourself (for example, normal pressure should be a number and be in the range from 50 to 160)
- Add the ability for the user to move cards on the board using Drag&Drop. Such manipulations with the card do not affect the location of other cards. After dragging the card, it is not necessary to "remember" its new location. When the page is reloaded, it can return to its original location.
