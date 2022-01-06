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
  
  const previousCell = {}
  const rq = [src[0]];
  const cq = [src[1]];
  const pq = [null];

  while (rq.length > 0) {
    const rc = rq.shift();
    const cc = cq.shift();
    const pc = pq.shift();

    const position = rc + "," + cc;
    
    if (visited.has(position)) continue;
    if (grid[rc][cc] === 0) continue;
    previousCell[position] = pc
    if (rc === dst[0] && cc === dst[1]) {
      path.add(rc + ',' + cc)
      let pc = previousCell[rc + ',' + cc]
      while(pc !== null) {
        let rp = pc[0]
        let cp = pc[1]
        path.add(rp + ',' + cp)
        pc = previousCell[rp + ',' + cp]
      }
      return path
    };

    visited.add(position);

    for (let delta of direction) {
      const neighbourR = rc + delta[0];
      const neighbourC = cc + delta[1];

      if (neighbourR < 0 || neighbourR >= grid.length) continue;
      if (neighbourC < 0 || neighbourC >= grid[neighbourR].length) continue;

      rq.push(neighbourR);
      cq.push(neighbourC);
      pq.push([rc, cc]);
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

const src = [0, 0];
const dst = [3, 4];

const path = shortestDistence(grid1, src, dst);
console.log(path);
printGrid(grid1, src, dst, path)
