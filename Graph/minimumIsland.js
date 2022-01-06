const minimumIsland = (grid) => {
  let minIsland = Infinity;
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      minIsland = Math.min(explore(grid, r, c, visited), minIsland);
    }
  }
  return minIsland;
};

const explore = (grid, r, c, visited) => {
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let size;

  const queue = [[r, c]];
  while (queue.length > 0) {
    const current = queue.shift();
    const position = current[0] + "," + current[1];

    if (visited.has(position)) continue;
    if (grid[current[0]][current[1]] === "W") continue;
    visited.add(position);
    size = size ? size + 1 : 1;
    for (let delta of direction) {
      const neighbourR = current[0] + delta[0];
      const neighbourC = current[1] + delta[1];

      if (neighbourR < 0 || neighbourR >= grid.length) continue;
      if (neighbourC < 0 || neighbourC >= grid[neighbourR].length) continue;

      queue.push([neighbourR, neighbourC]);
    }
  }
  return size || Infinity;
};
