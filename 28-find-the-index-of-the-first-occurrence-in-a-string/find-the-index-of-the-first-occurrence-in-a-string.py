class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        foundAt = []
        for i in range(0,len(haystack)):
            if (i + len(needle)-1) > (len(haystack)):
                break
            if haystack[i:i+len(needle)] == needle:
                foundAt.append(i)
        if not foundAt:
            return -1
        return min(foundAt)
        