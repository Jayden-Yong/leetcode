class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        last = len(digits) - 1
        digits[last] += 1

        while digits[last] > 9:
            if last == 0:
                digits.append(0)
                digits[0] = 1
                return digits
            digits[last-1] += 1
            digits[last] = 0
            last -= 1
        
        return digits