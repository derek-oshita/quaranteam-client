/* 
This helper function takes a large number (double) and returns a string
representing large numbers with commas. 
*/

const addCommasToNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default addCommasToNumber;
