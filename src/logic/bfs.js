const doDFS = (matrix, goal, visited = {}) => {
  console.log('M', matrix);
  console.log('G', goal);
  const goalArray = matrix[goal];
  console.log('GA', goalArray);
  console.log('V', visited);

  for (let i = 0; i < goalArray.length; i++) {
    if (goalArray[i] === 1 && !visited[`${goal}-${i}`] && !visited[`${goal}-${i}`]) {
      visited[`${goal}-${i}`] = true;
      visited[`${i}-${goal}`] = true;

      doDFS(matrix, i, visited);
    }
  }

  return visited;
};

export default doDFS;
