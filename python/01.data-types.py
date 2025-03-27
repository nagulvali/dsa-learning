# Data Types

#  python has following built-in datatypes
# - str
# - int, float, complex
# - list, tuple, range
# - dict
# - set, frozenset
# - bool
# - bytes, bytearray, memoryview
# - NoneType

# use type() function get the type of the data types
# In Python, the data type is set when you assign a value to a variable:



## Strings
message = "Hello World!!"


print(message.capitalize())
print(message.upper())
print(message.casefold())
print(message.count('o'))
print(message.center(20, '*'))
print(message.strip().split())
print(list(message))



## List methods
scores = [1, 2, 10, 13, 15, 22, 23, 6, 3, -2, -5, -1]
users = ["john", "lilly", "dane", "drake", "the weekend"]



users.append('vali')
print(users)
print(users.count('lilly'))


scores.extend(users)
print(scores)

print(scores.index('lilly'))
scores.insert(1, 'orange')
print(scores)
scores.pop()
scores.pop()
scores.pop()
print(scores)
scores.remove('orange')
print(scores)
scores.reverse()
print(scores)
# scores.sort()
# print(scores)
users.sort()
print(users)


users.clear()
print(users)




## reverse a string

message = "Hello World !!"
new_message = message.strip().split()[::-1]
# new_message.reverse()
print(''.join(new_message))

