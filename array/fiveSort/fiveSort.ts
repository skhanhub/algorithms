const fiveSort = (nums) => {
    let i = 0
    let j = nums.length - 1
    while (i < j) {
        if (nums[i] == 5) {
            const temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
            j--
        } else {
            i++
        }

    }
    return nums
};

export default fiveSort