import anagrams from "./anagrams";

describe("are two strings are anagrams", () => {
    it.each([
        ["restful", "fluster", true],
        ["cats", "tocs", false],
        ["monkeyswrite", "newyorktimes", true],
    ])
        ("for input %s and %s the output should be %s", (s1, s2, expected) => {
            const actual = anagrams(s1, s2);

            expect(actual).toBe(expected);
        });
});