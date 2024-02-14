const pairSum = (numbers, targetSum) => {
    let seen = {}
    for (let i in numbers) {
        const difference = targetSum - numbers[i]
        if (difference in seen) return [Number(seen[difference]), Number(i)]
        seen[numbers[i]] = i
    }

};

export default pairSum