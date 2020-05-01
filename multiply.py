from math import *


#function that multiplies two integers
#highly optimised
def multiply(x,y):
   l = [[i for i in range(x)] for j in range(y)]
   y = []
   for x in l:
      y += x
   return len(y)

#returns x grteater than or equal to y
def greater_than_or_equal(x,y):
   return int(x/y)

def better_multiply(x,y):
   return exp(log(x) + log(y))