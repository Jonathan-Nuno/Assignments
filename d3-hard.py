### Hard Assignment
## 9 high, each row is odd, starts at 1

#### Solution below prints pyrimid to the left
#def pyr(sym):
#    for x in range(sym):
#        print(''*(sym - x - 1) + '*' * (2 * x + 1))
#
#print(pyr(9))

### Solution 1

def pyr(sym):
    for x in range(sym):
        row = '*' * (2 * x + 1)
        print(row.center(2 * sym))

print(pyr(9))
