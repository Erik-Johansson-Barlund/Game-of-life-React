import { NodeType } from "../App";

/**
 * Called once per game tick for each square
 * checks the active states of all neighbors of the current square
 * returns a filtered array of active naighbors
 */
function getNeightbors(row: number, col: number, matrix: NodeType[][]) {
  const neighbors = [];
  // above row
  if (row > 0) {
    if (col > 0) {
      neighbors.push(matrix[row - 1][col - 1]);
    }
    neighbors.push(matrix[row - 1][col]);
    if (col < matrix[row].length) {
      neighbors.push(matrix[row - 1][col + 1])
    }
  }

  // same row
  if (col > 0) {
    neighbors.push(matrix[row][col - 1])
  }
  if (col < matrix[row].length) {
    neighbors.push(matrix[row][col + 1])
  }

  // below row
  if (row < matrix.length - 1) {
    if (col > 0) {
      neighbors.push(matrix[row + 1][col - 1]);
    }
    neighbors.push(matrix[row + 1][col]);
    if (col < matrix[row].length) {
      neighbors.push(matrix[row + 1][col + 1])
    }
  }
  return neighbors.filter(neighbor => neighbor?.active);
}

export default getNeightbors;
