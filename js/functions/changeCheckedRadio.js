
// function to change attribute "checked" for radio inputs in container


const changeCheckedRadio = (event) => {
  if (event.target.tagName === 'INPUT') {
    event.currentTarget.querySelectorAll('input').forEach(input => {
      input.removeAttribute('checked');
    });
    event.target.setAttribute('checked', true);
  };
};

export default changeCheckedRadio;

