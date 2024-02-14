const mostFrequentChar = (s) => {
    const count = {}
    let largest = 0
    let largestChar
    for (let c of s) {
        count[c] = count[c] ? count[c] + 1 : 1
    }
    for (let c in count) {
        if (count[c] > largest) {
            largestChar = c
            largest = count[c]
        }
    }
    return largestChar
};

export default mostFrequentChar