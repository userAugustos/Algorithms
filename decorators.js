/* Important to remember that decorators need a transpiler, they will not work in legacy code */

// @TODO: Configure babel to run decorators

const pao = (pao) => {
  pao.property = "gergilim";
};

@pao
class Lanche {}

console.debug(Lanche.property);
