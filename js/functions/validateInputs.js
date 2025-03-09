
// highlight not validated inputs
function highlight(form, key, placeholder) {
  form.querySelector(`#${ key }`).style.backgroundColor = 'rgb(250, 157, 188)';
  form.querySelector(`#${ key }`).value ='';
  form.querySelector(`#${ key }`).setAttribute('placeholder', placeholder);
};


// Function to validate inputs in form

const validateInputs = (obj, form) => {
  let isFalse = false;
  for (let key in obj) {
    if (typeof obj[key] !== 'object') {
      switch (key) {
        case 'age':
          if (!obj[key].match(/^(?:[1-9]|[1-9][0-9]|1[01][0-9]|120)$/)) {
            highlight(form, key, 'min 0, max 120');
            isFalse = true;
          };
          break;
          case 'weight':
            if (!obj[key].match(/^(?:\d{1,2}|\d{1,2}\.\d{1,3}|[1-4]\d{2}|[1-4]\d{2}\.\d{1,3}|499\.9{1,3})$/)) {
            highlight(form, key, 'min 0.000, max 499.999');
            isFalse = true;
          };
          break;
          case 'pressure':
            if (!obj[key].match(/^(?:[6-9][0-9]|[12][0-9]{2}|300)(?:[ ]{0,2}\/[ ]{0,2}(?:[1-9][0-9]|1[0-6][0-9]|170))?$/)) {
            highlight(form, key, 'XXX or XXX/XX');
            isFalse = true;
          };
          break;
      };
    };
    if (typeof obj[key] === 'object') {
      if (!validateInputs(obj[key], form)) {
        isFalse = true;
      };
    };
  };
  return isFalse ? false : true;
};

export default validateInputs;

