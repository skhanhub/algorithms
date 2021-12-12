const hasPathDepth = (graph, src, dst) => {
  const stack = [src];
  while (stack.length > 0) {
    let current = stack.pop();
    for (let neighbour of graph[current]) {
      if (neighbour === dst) return true;
      stack.push(neighbour);
    }
  }
  return false;
};

const hasPathDepthRec = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbour of graph[src]) {
    if (hasPathDepthRec(graph, neighbour, dst)) return true;
  }
  return false;
};

const hasPathBreth = (graph, src, dst) => {
  const queue = [src];
  while (queue.length > 0) {
    let current = queue.shift();
    for (let neighbour of graph[current]) {
      if (neighbour === dst) return true;
      queue.push(neighbour);
    }
  }
  return false;
};

export default {
  hasPath: hasPathDepthRec,
};
