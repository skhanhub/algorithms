const nonRepeating = (str) => {
    const seen = {};

    for (let s of str) {
        if (s in seen) seen[s] = false;
        else seen[s] = true;
    }

    for (let s of str) {
        if (seen[s]) return s;
    }
    return null;
};


export default nonRepeating;

