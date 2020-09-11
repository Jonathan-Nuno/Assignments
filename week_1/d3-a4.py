### Assignment 4 - find missing element

#Solution # 1 
def miss(nums):
    big = max(nums)
    arrayMaxTot = big * (big + 1) // 2
    arrayTot = sum(nums)
    return arrayMaxTot - arrayTot

numbers = [0 , 1 , 2 , 3 , 4 , 5 , 7 , 8 , 9]
print(miss(numbers))
