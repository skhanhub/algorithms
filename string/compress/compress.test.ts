import compress from "./compress";

describe("compress string", () => {
    it.each([
        ["ccaaatsss", "2c3at3s"],
        ["ssssbbz", "4s2bz"],
        ["ppoppppp", "2po5p"],
        ["nnneeeeeeeeeeeezz", "3n12e2z"],
        ["yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", "127y"],
    ])
        ("for input %s the output should be %s", (num, expected) => {
            const actual = compress(num);

            expect(actual).toBe(expected);
        });
});