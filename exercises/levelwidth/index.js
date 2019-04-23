// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const nodes = [root, 's']
    const counter = [0]

    while (nodes.length > 1) {
        if (nodes[0] === 's') {
            nodes.push(nodes.shift())
            counter.push(0)
        }

        const node = nodes.shift();
        counter[counter.length-1]++
        if (node.children) {nodes.push(...node.children)}
    }

    return counter
}

module.exports = levelWidth;
