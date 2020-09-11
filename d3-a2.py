### Assignment 2 - find largest & smallest element

### Solution 1

numbers = [11 , 31 , 42 , 0.02 , -17, -17.1, 9]

numbers.sort()

def largest (nums , n):
    return max(nums)

def smallest (nums, n):
    return min(nums)

n = len(numbers)

large = largest(numbers, n)
small = smallest(numbers, n)

print(f"List of Numbers: {numbers}")
print(f"The largest number is {large}")
print(f"The smallest number is {small}")

