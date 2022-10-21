const sumArray = (numbers: number[]) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

// console.log(sumArray([3, 5, 9, 15]));

// Eg: If I give [5, 4, 2, 10, 15, 5] it should return me 15.

const maxInArray = (numbers: number[]) => {
  return Math.max(...numbers);
};

// console.log(maxInArray([5, 4, 2, 10, 15, 5]));

const oddInArray = (numbers: number[]) => {
  return numbers.filter((num) => num % 2 === 1);
};

console.log(oddInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Eg: If I give [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return [1, 3, 5, 7, 9]

export {};
