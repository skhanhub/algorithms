const commonElements = (list1, list2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] == list2[j]) {
            result.push(list1[i]);
            i += 1;
            j += 1;
        }
        else if (list1[i] > list2[j])
            j += 1;
        else
            i += 1;
    }
    return result;
};

export default commonElements;
