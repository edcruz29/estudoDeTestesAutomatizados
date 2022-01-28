//A quantidade vendida pode ser de 1 ou mais unidades
import Product from "../src/model/product";
import sellProduct from "../src/service/sellProduct";

test("deve validar baixa de estoque da venda de uma unidade", () => {
  let produto = new Product("celular", 500.0, 900.0, 10);
  sellProduct(produto, 1);
  expect(produto.stock).toBe(9);
});

test("deve permitir a venda de mais de uma unidade", () => {
  let produto = new Product("celular", 500.0, 900.0, 10);
  sellProduct(produto, 5);
  expect(produto.stock).toBe(5);
});
