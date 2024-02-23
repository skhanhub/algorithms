const isRotation = (list1, list2) => {
    if (list1.length != list2.length) return false;

    let i = 0;
    let j = 0;
    let found = false;
    while (j < list2.length) {
        if (list1[i] == list2[j]) {
            found = true;
            break;
        }
        j += 1;
    }

    if (found == false) return false;
    while (i < list1.length) {
        if (list1[i] != list2[j])
            return false;
        i += 1;
        j += 1;
        if (j == list2.length) j = 0;
    }
    return true;
};

export default isRotation;
