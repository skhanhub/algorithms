const intersection = (a, b) => {
    const result = []
    const aSet = new Set(a)
    for (let num of b) {
        if (aSet.has(num)) result.push(num)
    }
    return result
};




export default intersection