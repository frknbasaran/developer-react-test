/**
 * Calculate the min and max values of the data
 * @param data - The data to calculate the min and max values
 * @returns An object containing the min and max values
 */
export function calculateEdges(data: Array<Array<string | number>>) {
  let max = -Infinity;
  let min = Infinity;

  // skip the first row and column
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data[i].length; j++) {
      const value = parseFloat(data[i][j] as string);
      max = Math.max(max, value);
      min = Math.min(min, value);
    }
  }

  return { min, max };
}
