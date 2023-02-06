//1. In this question you must multiply two matrices A and B and store the answer in
// matrix C. For multiplying matrices, you must take care of the matrix multiplication
// rule i.e the column number of matrix A should be equal to matrix B.
// Step 1: Get matrix size from the user for both matrices and compare them. If it
// don’t follow the matrix multiplication rule, ask user again for the correct values.
// Step 2: Store values in list for each matrix by prompting user to enter the values.
// Step 3: Calculate the product of matrix A and matrix B.
// Step 4: Display the out in proper format.

let R1 = 4;
// number of rows in Matrix-1
let C1 = 4;
// number of columns in Matrix-1
let R2 = 4;
// number of rows in Matrix-2
let C2 = 4;
// number of columns in Matrix-2
// This function multiplies mat1[][]
// and mat2[][], and stores the result
// in res[][]
function mulMat(mat1, mat2) {
  // To store result
  let arr = [C1][R2];
  console.log("Multiplication of given two matrices is:");
  let i = 0;
  let j = 0;
  let k = 0;
  for (i = 0; i < R1; i++) {
    console.log("Multipl");
    for (j = 0; j < C2; j++) {
      console.log("Multipl3");

      for (k = 0; k < R2; k++) {
        console.log("Multipl4");

        arr[i][j] = mat1[i][k] * mat2[k][j];
      }
      console.log(arr[i][j] + " ");
    }
    console.log("");
  }
}
// Driver program

let mat1 = [
  [1, 2, 3, 4],
  [4, 6, 8, 2],
];
let mat2 = [
  [1, 9, 7, 6],
  [6, 3, 2, 2],
];

if (C1 != R2) {
  console.log(
    "The number of columns in Matrix-1 must be equal to the number of rows in Matrix-2"
  );
  console.log(
    "Please update the global letiables according to your array dimension"
  );
} else {
  mulMat(mat1, mat2);
}
