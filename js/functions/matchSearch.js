
// Recursive function to check all fields of object if they include searched value


const matchSearch = (obj, search) => {
  for (let key in obj) {
    if (typeof obj[key] !== 'object' && key !== 'id' && String(obj[key]).toLowerCase().includes(String(search).toLowerCase())) {
      console.log(key, ': ', obj[key], 'matches - ', search, '-');
      return true;
    };
    if (typeof obj[key] === 'object') {
      if (matchSearch(obj[key], search)) {
        return true;
      };
    };
  };
  return false;
};

export default matchSearch;

