const compress = (s) => {
    let result = ""
    let count = 0
    let prev = s[0]
    let i = 0
    while (i <= s.length) {
        if (prev === s[i]) count++
        else {
            result += `${count === 1 ? "" : count}${prev}`
            count = 1
        }
        prev = s[i]
        i++
    }
    return result
};


const compressTwoPointer = (s) => {

    let i = 0
    let j = 0
    const result = []
    while (i <= s.length) {
        if (s[i] == s[j]) {
            i++
        }
        else {
            const count = i - j
            if (count == 1) result.push(s[j])
            else {
                result.push(count)
                result.push(s[j])
            }
            j = i
        }
    }
    return result.join("")
};


export default compress