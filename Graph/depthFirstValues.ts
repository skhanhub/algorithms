// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValuesIt = (root) => {
  if (root === null) return [];
  const values = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    values.push(current.val);
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return values;
};

const depthFirstValues = (root) => {
  if (root === null) return [];
  return [
    root.val,
    ...depthFirstValues(root.left),
    ...depthFirstValues(root.right),
  ];
};
