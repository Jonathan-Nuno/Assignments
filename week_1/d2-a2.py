### Day 2 - Assignment 2 - Palindrome detector

###Solution 1
#print("Palindrome Checker")

#stc = input("Enter a word: ")
#if stc == stc [::-1]:
#    print("This word is a palindrome")
#else:
#    print("This word is not a palindrome")


### Solution 2

print("Palindrome Checker")

def palin(n):
    for index in range(0,int(len(n)/2)):
        if n[index] != n[len(n) -index -1]:
            return False
        return True

w = input("Please enter a word: ")
ans = palin(w)

if (ans):
    print("Yes")
else:
    print("No")