const shortestPath = (edges, nodeA, nodeB) => {
  const graph = toGraph(edges);
  const visited = new Set();

  const queue = [[nodeA, 0]];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current[0] === nodeB) return current[1];
    if (visited.has(current[0])) continue;
    visited.add(current[0]);
    for (let neighbour of graph[current[0]]) {
      queue.push([neighbour, current[1] + 1]);
    }
  }
  return -1;
};

let toGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [nodeA, nodeB] = edge;
    if (!graph[nodeA]) graph[nodeA] = [];
    if (!graph[nodeB]) graph[nodeB] = [];

    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }
  return graph;
};

module.exports = {
  shortestPath,
};
