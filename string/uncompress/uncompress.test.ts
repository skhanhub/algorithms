import uncompress from "./uncompress";

describe("Uncompress string", () => {
    it.each([
        ["2c3a1t", "ccaaat"],
        ["4s2b", "ssssbb"],
        ["2p1o5p", "ppoppppp"],
        ["3n12e2z", "nnneeeeeeeeeeeezz"],
        ["127y", "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"],
    ])
        ("for input %s the output should be %s", (num, expected) => {
            const actual = uncompress(num);

            expect(actual).toBe(expected);
        });
});