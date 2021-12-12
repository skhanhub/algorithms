const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = toGraph(edges);
  const visited = new Set();
  const queue = [nodeA];
  while (queue.length > 0) {
    const current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);
    if (current === nodeB) return true;
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
  return false;
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
