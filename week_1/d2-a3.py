### Day 2 - Assignment 3 Prime Number detector

##Solution 1
#print("Prime number detector")

#while True:
#    pn = int(input("Please enter a number: "))
#    for index in range(2, pn):
#        if pn % index == 0:
#            print("is not a prime number!")
#            break
#    else:
#        print(pn, "is a prime number!")
#        break

### Solution 2
print("Prime number detector")

def prim(n):
    if n < 2:
        return False
    if n == 2: 
        return True
    if not n & 1:
        return False
    for index in range(3, pn, 2):
        if n % index == 0:
            return False

    return True

pn = int(input("Please enter your number: "))
ans = prim(pn)

if (ans):
    print("It is a prime number")
else:
    print("It is not a prime number")