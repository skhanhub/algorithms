const shortestDistence = (grid, src, dst) => {
  const path = new Set()
  if (grid[src[0]][src[1]] === 0 || grid[dst[0]][dst[1]] === 0) return path;
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const visited = new Set();
  const startPos = src[0] + ',' + src[1]
  const previousCell = {
    [startPos]: null
  }
  
  const rq = [src[0]];
  const cq = [src[1]];

  while (rq.length > 0) {
    const rc = rq.shift();
    const cc = cq.shift();
    let position = rc + "," + cc;
    visited.add(position);

    if (rc === dst[0] && cc === dst[1]) {
      
      while(true) {
        if(previousCell[position] === null) return path
        path.add(position)
        position = previousCell[position][0] + "," + previousCell[position][1]
      }
    };
    
    for (let delta of direction) {
      
      const neighbourR = rc + delta[0];
      const neighbourC = cc + delta[1];
      position = neighbourR + "," + neighbourC;
      if (neighbourR < 0 || neighbourR >= grid.length) continue;
      if (neighbourC < 0 || neighbourC >= grid[neighbourR].length) continue;
      if (visited.has(position)) continue;
      if (grid[neighbourR][neighbourC] === 0) continue;
      
      rq.push(neighbourR);
      cq.push(neighbourC);
      previousCell[position] = [rc, cc]
    }
  }
  return path
};



const printGrid = (grid, src, dst, path)=>{

  let map = ""
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if(src[0] === r && src[1] === c) map += "S ";
      else if(dst[0] === r && dst[1] === c) map += "D ";
      else if(path.has(r+','+c)) map += "+ ";
      else map += grid[r][c] + " ";
      
    }
    map += "\n";
  }
  console.log(map);
}

const grid1 = [
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1, 0, 0, 1],
];

const grid2 = [
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
];

const grid3 = [
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1, 0, 0, 1],
];
const src = [0, 0];
const dst = [8, 9];

const path = shortestDistence(grid3, src, dst);
console.log(path);
printGrid(grid3, src, dst, path)
