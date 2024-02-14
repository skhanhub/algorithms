const mergeSort = (nums) => {
    if (nums.length == 1) return nums;
    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));
    return merge(left, right);
};

const merge = (nums1, nums2) => {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }

    if (i < nums1.length) return [...result, ...nums1.slice(i)];
    if (j < nums2.length) return [...result, ...nums2.slice(j)];
};


export default mergeSort;