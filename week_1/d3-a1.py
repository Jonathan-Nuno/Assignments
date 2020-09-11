### Assignment 1 - remove duplicates from Array

### Solution 1 - converting list to dictionary and back to a list in order to remove duplicates

#names = [ "Alex", "John", "Mary", "Steve", "John", "Steve"]
#names = list(dict.fromkeys(names))
#
#names.sort() # I wanted names in order
#print(names)

### Solution 2 - using a function that will convert a list into a dictionary and return as a list to remove duplicates

names = [ "Alex", "John", "Mary", "Steve", "John", "Steve"]

def remover(dupe):
    return list(dict.fromkeys(dupe))

print(remover(names))

