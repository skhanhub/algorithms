const anagrams = (s1, s2) => {
    if (s1.length !== s2.length) return false
    let s1Hash = {}
    for (let c of s1) {
        s1Hash[c] = s1Hash[c] ? s1Hash[c] + 1 : 1
    }
    for (let c of s2) {
        if (s1Hash[c] && s1Hash[c] > 0) s1Hash[c]--
        else return false
    }
    return true
};

export default anagrams