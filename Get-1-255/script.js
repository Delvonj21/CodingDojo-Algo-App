// Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.

function get_array() {
  let arr = [];
  for(let i = 1; i <= 255; i++){
    arr.push(i);
  }
  return arr; 
}