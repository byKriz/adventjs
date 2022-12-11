def checkPart(part):
    def palindrome(word):
        return word == word[::-1]

    def check_sub(word):
        for i in range(0, len(word)):
            l = word[0:i]
            r = word[i+1: len(word)]
            # print(l, r)
            if palindrome(l + r):
                return True

    return palindrome(part) or check_sub(part)


print(checkPart("zzzoonzzz"))
