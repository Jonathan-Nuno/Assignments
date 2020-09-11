### Assignment 3 - Fizz Buzz

print("Can you get Fizz Buzz?")
num = int(input("Please enter a number: "))

if (num % 3) == 0 and (num % 5) != 0:
    print("Fizz")
elif (num % 5) == 0 and (num % 3) != 0:
    print("Buzz")
elif (num % 3 and 5) == 0:
    print("Fizz Buzz")
else:
    print("Doesn't work :(")