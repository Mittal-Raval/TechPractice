// Q1. Spirally traversing a matrix

function spiralOrder(matrix) {
  let result = [];

  if (matrix.length === 0 || matrix[0].length === 0) return result;

  let r1 = 0,
    r2 = matrix.length - 1;
  let c1 = 0,
    c2 = matrix[0].length - 1;

  while (r1 <= r2 && c1 <= c2) {
    for (let i = c1; i <= c2; i++) {
      result.push(matrix[r1][i]);
    }
    r1++;

    for (let i = r1; i <= r2; i++) {
      result.push(matrix[i][c2]);
    }
    c2--;

    if (r1 <= r2) {
      for (let i = c2; i >= c1; i--) {
        result.push(matrix[r2][i]);
      }
      r2--;
    }

    if (c1 <= c2) {
      for (let i = r2; i >= r1; i--) {
        result.push(matrix[i][c1]);
      }
      c1++;
    }
  }

  return result.join("");
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let output = spiralOrder(matrix);

console.log(output);
