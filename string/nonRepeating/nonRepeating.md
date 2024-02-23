
Non-Repeating Character 
Implement a function that takes a string and returns the first character that does not appear twice or more.

Example:

"abacc" -> 'b' ('a' appears twice, and so does 'c')
"xxyzx" -> 'y' ('y' and 'z' are non-repeating characters, and 'y' appears first)
If there is no non-repeating character, return None.


# NOTE: The following input values will be used for testing your solution.
non_repeating("abcab") # should return 'c'
non_repeating("abab") # should return None
non_repeating("aabbbc") # should return 'c'
non_repeating("aabbdbc") # should return 'd'