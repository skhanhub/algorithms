const isOneAway = (s1, s2) => {
    if (s1.length - s2.length > 1 || s2.length - s1.length > 1) return false;

    if (s1.length == s2.length)
        return sameLength(s1, s2);
    else if (s1.length > s2.length)
        return differentLength(s1, s2);
    else
        return differentLength(s2, s1);
};

const differentLength = (s1, s2) => {
    let count = 0;
    for (let i = 0; i < s2.length; i++) {
        if (s1[i + count] != s2[i]) count += 1;
        if (count > 1) return false;
    }
    return true;
};

const sameLength = (s1, s2) => {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) count += 1;
        if (count > 1) return false;
    }
    return true;
};

export default isOneAway;

