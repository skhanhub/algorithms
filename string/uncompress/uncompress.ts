const uncompress = (s) => {
    let nums = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    let cm = ""
    let result = ""
    for (let c of s) {
        if (nums.has(c)) cm += c
        else {
            for (let i = 0; i < Number(cm); i++) {
                result += c
            }
            cm = ""
        }
    }

    return result
};

export default uncompress