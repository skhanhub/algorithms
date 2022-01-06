const largestComponent = (graph) => {
  let largest = 0;
  const visited = new Set();
  for (let node in graph) {
    largest = Math.max(explore(graph, node, visited), largest);
  }
  return largest;
};

let explore = (graph, node, visited) => {
  let size = 0;
  const queue = [node];
  while (queue.length > 0) {
    const current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);
    size++;
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
  return size;
};

module.exports = {
  largestComponent,
};
