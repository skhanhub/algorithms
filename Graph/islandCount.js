const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      count += explore(grid, r, c, visited);
    }
  }
  return count;
};

const explore = (grid, r, c, visited) => {
  let newIsland = 0;
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [[r, c]];
  while (queue.length > 0) {
    const current = queue.shift();
    const position = current[0] + "," + current[1];

    if (visited.has(position)) continue;
    if (grid[current[0]][current[1]] === "W") continue;
    visited.add(position);
    newIsland = 1;
    for (let delta of direction) {
      const neighbourR = current[0] + delta[0];
      const neighbourC = current[1] + delta[1];

      if (neighbourR < 0 || neighbourR >= grid.length) continue;
      if (neighbourC < 0 || neighbourC >= grid[neighbourR].length) continue;

      queue.push([neighbourR, neighbourC]);
    }
  }
  return newIsland;
};
