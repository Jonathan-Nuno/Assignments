### Day 2 - Assignment 1 - Ask users for input and then print the factorial for that number. 

###Solution 1 below
#num = int(input("Enter a number: "))
#factorial = 1
#
#if num < 0:
#    print("Factorial does not exist for negative numbers")
#elif num == 0:
#    print ("The factorial of 0 is 1")
#else:
#    for i in range(1,num + 1):
#        factorial = factorial * i
#    print("The factorial of",num,"is",factorial)


### Solution 2 below
print("Factorial finder")

def factorial(num):
    fact = 1 
    for index in range(1,num + 1):
        fact = fact * index
    return fact

number = int(input("Please enter any number: "))

factn = factorial(number)
print("The Factorial of %d = %d"%(number,factn))