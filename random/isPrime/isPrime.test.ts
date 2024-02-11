import isPrime from "./isPrime";

describe("Checks if number is prime", () => {
    it.each([
        [2, true],
        [3, true],
        [4, false],
        [5, true],
        [25, false],
        [31, true],
        [2017, true],
        [2048, false],
        [1, false],
        [713, false],
    ])
        ("for input %s the output should be %s", (num, expected) => {
            const actual = isPrime(num);

            expect(actual).toBe(expected);
        });
});