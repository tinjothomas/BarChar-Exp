import data from "./data.js"

const getData = () => {
  console.log(data)
}

const array1 = [{name: 1}, {name: 5}, {name: 7}];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (a, b) => a + b.name,
  initialValue
);

console.log(sumWithInitial);


export default getData;

