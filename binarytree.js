/**
 * Em Javascript uma arvore é uma coleção de nós conectados por algumsa arestas
 * > Uma ávore é uma estrutura de dados não linear
 * > Uma árvore de pesquisa binária é uma árvore binária na qual os nós com menor valor são armazenados à esquerda, enquanto os nós de maior valor são armazenados à direta
 */

class Node {
  constructor() {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // valor raiz da arvore
  }
  /**
   *
   * @param {*} data
   */
  insert(data) {
    // defining a node with data value
    let newNode = new Node(data);

    // if root is null, then a newNode will be add to the not and create a root
    if (!this.root) {
      // null doesn't pass in this validation, so no need to compare
      this.root = newNode;
    }

    this.insertNode(this.root, newNode);
  }

  /**Compara os dados fornecidos com os dados do nó atual
   * move para a esquerda ou direita de acordo e retorna até encontrar um nó correto com um valor nulo onde um novo nó pode ser adicionado.
   * @param {Node} node Nó atual na Arvore
   * @param {Node} newNode Novo Nó sendo aplicado
   */
  insertNode(node, newNode) {
    //Então aqui começa as regras de trabalho com a arvore binária
    // Se o valor de data, for menor que o valor raiz (root), então vai para esquerda, se não, para direita
    if (newNode.data < node.data) {
      // se ainda não tem nada a esquerda
      if (!node.left) {
        node.left = newNode;
      }
      // então se já tem algo a esquerda, recursividade com, agora com o nó a esquerda, até o valor ser null. (ou seja, até não haver mais filhos a esquerda dessa arvore)
      this.insertNode(node.left, newNode);
    }
    // se não vai pra esquerda, vai pra direta
    if (!node.right) {
      node.right = newNode;
    }
    // mesma regra a cima, se o galho a direita da nossa arvore, já tem um valor, descemos mais um galho, repassando o valor a arvore a direita, até não haver um valor
    this.insertNode(node.right, newNode);
  }
  /**
   *
   * @param {*} data
   */
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  /**
   * This guy just search the tree and recursively until find the key and removes data from node
   * @param {Node} node
   * @param {*} key
   */
  removeNode(node, key) {
    if (!node) {
      return null;
    }
    // no secret, key is less than node root value, go to left
    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // if data is equal to root data, than we need to go to delete this data, let's think about it:

    // first, no children node
    if (!node.left && !node.right) {
      node = null;
      return node;
    }

    if (!node.left) {
      // filho direito
      node = node.right;
      return node;
    }

    if (!node.right) {
      // filho esquerdo
      node = node.left;
      return node;
    }

    //node with two children
    // so we get the minumum node of the right subree and store in aux
    let aux = this.findMinNode(node.right);
    node.data = aux.data;

    node.right = this.removeNode(node.right, aux.data);
    return node;
  }
}
