# Uma função fatorial é definida da seguinte forma: x!
# Então, um fatorial é o número mutiplicado por seus anteriores até 1, então: 
# 6! = 6 * 5 * 4 * 3 * 2 * 1 = 

def fat(x):
  if x == 1: return 1
  
  return x * fat(x - 1)

print(fat(3))