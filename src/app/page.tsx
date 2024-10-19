'use client'

import { Product } from "./product";
import ProdutosHome from "./ProdutosHome";

let products: Product[] = [];

function addProduct(product: Product): void {
  products.push(product);
}

function getProduct(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

function updateStock(id: number, quantity: number): void {
  const product = getProduct(id);
  if (product) {
    product.stock += quantity;
    console.log(`Estoque atualizado: ${product.name} agora tem ${product.stock} itens.`);
  } else {
    console.error(`Produto com id ${id} não encontrado.`);
  }
}


addProduct({ id: 1, name: "Smartphone", price: 999, category: "Eletrônicos", description: "Smartphone com tela de 6.5''", stock: 50, rating: 4.5 });
addProduct({ id: 2, name: "Camiseta", price: 49, category: "Roupas", description: "Camiseta 100% algodão", stock: 100, rating: 4.0 });
addProduct({ id: 3, name: "Laptop", price: 1500, category: "Eletrônicos", description: "Laptop para jogos e trabalho", stock: 30, rating: 4.8 });

console.log(getProduct(1))
updateStock(3, 5)
updateStock(2, 30)
console.log(getProductsByCategory("Roupas"))

export default function Home() {
  return (
    <>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            id: {product.id} | nome: {product.name} | preço: {product.price} | categoria: {product.category} | descrição: {product.description} | estoque: {product.stock} | avaliação: {product.rating}
          </li>
        ))}
      </ul>

      <ProdutosHome />
    </>
  );
}
