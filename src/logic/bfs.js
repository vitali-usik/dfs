const doDFS = (matrix, goal, visited = {}) => {
  const goalArray = matrix[goal];

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
