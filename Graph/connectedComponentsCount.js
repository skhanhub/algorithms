const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    count += explore(graph, node, visited);
  }
  return count;
};

const explore = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  const queue = [node];
  while (queue.length > 0) {
    const current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);

    for (let neighbour of graph[current]) {
      queue.push(String(neighbour));
    }
  }
  return 1;
};

export default {
  connectedComponentsCount,
};
