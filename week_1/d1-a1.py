### Assignment 1 - Calc tool

# Add 2 nums
def add(x, y):
    return x + y

#Sub 2 nums
def subtract(x, y):
    return x - y

#Muti 2 nums
def multiply(x, y):
    return x * y

#Divi 2 nums
def divide(x, y):
    return x / y

print("Select operation ")    
print("1.Add")
print("2.Subtract")
print("3.Multiply")
print("4.Divide")

# provide choices 1-4
sel = input("Enter Choice 1, 2, 3 or 4: ")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
#check if choice is in the list
if sel in ('1', '2', '3', '4'):
    if sel == '1':
        print(num1, "+", num2, "=", add(num1, num2))
    
    elif sel == '2':
        print(num1, "-", num2, "=", subtract(num1, num2))

    elif sel == '3':
        print(num1, "*", num2, "=", multiply(num1, num2))

    elif sel == '4':
        print(num1, '/', num2, "=", divide(num1, num2))

else: 
    print("Invalid Input")