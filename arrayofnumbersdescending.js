function sortDescending(num) {
    return num.sort((a, b) => b - a);
  }

  let numbers = [4, 2, 7, 1, 3];
  let sortedNumbers = sortDescending(numbers);
  console.log(sortedNumbers);
  
  