
// Function to render 'no items';

const renderNoItems = async () => {
  let noItems = document.createElement('p');
  noItems.classList.add('no-items');
  noItems.textContent = 'No items have been added'
  document.querySelector('.visits').append(noItems);
};

export default renderNoItems;
