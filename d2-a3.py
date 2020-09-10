### Day 2 - Assignment 3 Prime Number detector

##Solution 1
print("Prime number detector")

while True:
    pn = int(input("Please enter a number: "))
    for index in range(2, pn):
        if pn % index == 0:
            print("is not a prime number!")
            break
    else:
        print(pn, "is a prime number!")
        break

### WORK IN PROGRESSfunction with T/F statement to return if prime or not