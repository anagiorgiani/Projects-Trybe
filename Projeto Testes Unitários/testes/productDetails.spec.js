const { fail } = require('assert');
const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const valores = Object.values(productDetails.name)
    const products = productDetails('alcool gel', 'mascara')
    assert.deepStrictEqual(Array.isArray(products), true);
    assert.deepStrictEqual((products).length, 2);
    assert.deepStrictEqual(typeof products[0], 'object')
    assert.deepStrictEqual(typeof products[1], 'object')
    assert.notDeepStrictEqual(products[0], products[1]);

    for (let index = 0; index < products.length; index += 1) {
      assert.ok(products[index].details.productId.endsWith('123'));
    }
  });
});
