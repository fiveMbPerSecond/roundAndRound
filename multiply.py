
#function that multiplies two integers
#highly optimised
def multiply(x,y):
   l = [[i for i in range(x)] for j in range(y)]
   y = []
   for x in l:
      y += x
   return len(y)