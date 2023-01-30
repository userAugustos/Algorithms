então, pensando em stacks (pilhas), o computador usa uma pilha quando trabalhamos com funções, então se uma função chama outra, o estado dessa função fica como pausado, enquanto o item mais recente na pilha, é executado, até retornar, onde os dados da função anterior, ainda estão em memória, parece complexo, mas com um exemplo simples podemos demonstar:


```python

def falaOi():
	print("Oi")
	comoVai()
	print("Que bom")
	tchau()

def comoVai():
	print("Como vai você?")

def tchau():
	print("Então tchau")
```

Nesse exemplo, iniciamos a função `falaOi()` e ela, imprime "Oi", e então chama outra função, onde o máquina agora decide, usar uma pilha, então, teremos na base dessa pilha, a função `falaOi` e a máquina guardara o estado atual dessa função e então adicionar ao topo da pilha, a função chamada: `comoVai()`, assim, como vai possui um novo "bloco" nessa pilha, com seu estado, quando essa função termina de ser executada, e retorna, ela é finalizada, e o estado da função `falaOi()` que estava "pausado" agora será executado, continuando pra função `tchau()` que segue o mesmo processo, se a função chamada, chamar outras funções será assim recursivamente.

Podemos até experienciar isso, quando trabalhamos com javascript vanilla, e trabalhamos com função dentro de função e chamadas, e tudo é renderizado e trabalhado pelo broswer(ou node) a partir de um arquivo como `app.js` ou `main.js`, e se um erro ocorre dentro de alguma função no projeto, o erro é mostrado como:
	erro foo on bar in app.js line 5678
e então você se pega pensando, como pode, se o erro não é no app.js e o app.js nem tem essa quantidade de linhas, acontece que o erro aconteceu em um desses "blocos" de função dentro da pilha, criada pela função no `app.js`, e o traco aconteceu, e a pilha foi se retirando, descendo até o `app.js`. (Outras linguagens podem ter uma forma melhor de trabalhar o error tracking).


- Recursão é quando uma função chama a si mesmo
- Toda função recursiva tem dois casos: o caso-base e o caso-recursivo
- Uma pilha tem duas operações: push e pop
- Todas as chamadas de função vão para a pilha de chamada.
- A pilha de chamada pode ficar muito grande e ocupar muita memória.