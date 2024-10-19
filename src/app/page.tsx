'use client'

import { Product } from "./product";

let products: Product[] = [];

function addProduct(product: Product): void {
  products.push(product);
}

function getProduct(id: number): Product | undefined {
  return products.find(product => product.id === id);
}


addProduct({ id: 1, name: "Smartphone", price: 999, category: "Eletrônicos" });
addProduct({ id: 2, name: "Camiseta", price: 49, category: "Roupas" });
addProduct({ id: 3, name: "Laptop", price: 1500, category: "Eletrônicos" });

console.log(getProduct(5))

export default function Home() {
  return (
    <>
      <ul>
        {products.map(product =>(
          <li key={product.id}>
            id: {product.id} name: {product.name} price: {product.price} category: {product.category}
          </li>
        ))}
      </ul>
    </>
  );
}
