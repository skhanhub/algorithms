const pairProduct = (numbers, targetProduct) => {
    const seen = {}
    for (let i in numbers) {
        let c = targetProduct / numbers[i]
        if (c in seen) return [Number(seen[c]), Number(i)]
        seen[numbers[i]] = i
    }
};

export default pairProduct