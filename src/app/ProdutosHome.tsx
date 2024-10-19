'use client'

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  stock: number;
  rating: number;
}

let initialProducts: Product[] = [
  { id: 1, name: "Smartphone", price: 999, category: "Eletrônicos", description: "Smartphone com tela de 6.5''", stock: 50, rating: 4.5 },
  { id: 2, name: "Camiseta", price: 49, category: "Roupas", description: "Camiseta 100% algodão", stock: 100, rating: 4.0 },
  { id: 3, name: "Laptop", price: 1500, category: "Eletrônicos", description: "Laptop para jogos e trabalho", stock: 30, rating: 4.8 }
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    category: "",
    description: "",
    stock: 0,
    rating: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: name === 'id' || name === 'price' || name === 'stock' || name === 'rating' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProducts(prev => [...prev, newProduct]);
    setNewProduct({
      id: 0,
      name: "",
      price: 0,
      category: "",
      description: "",
      stock: 0,
      rating: 0
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Adicionar Produto</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="number" name="id" placeholder="ID" value={newProduct.id} onChange={handleChange} required className="border rounded py-2 px-3 text-black" />
          <input type="text" name="name" placeholder="Nome" value={newProduct.name} onChange={handleChange} required className="border rounded py-2 px-3 text-black" />
          <input type="number" name="price" placeholder="Preço" value={newProduct.price} onChange={handleChange} required className="border rounded py-2 px-3 text-black" />
          <input type="text" name="category" placeholder="Categoria" value={newProduct.category} onChange={handleChange} required className="border rounded py-2 px-3 text-black" />
          <input type="text" name="description" placeholder="Descrição" value={newProduct.description} onChange={handleChange} required className="border rounded py-2 px-3 text-black" />
          <input type="number" name="stock" placeholder="Estoque" value={newProduct.stock} onChange={handleChange} required className="border rounded py-2 px-3 text-black" />
          <input type="number" name="rating" placeholder="Avaliação" value={newProduct.rating} onChange={handleChange} required className="border rounded py-2 px-3 text-black" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Adicionar Produto
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Lista de Produtos</h2>
      <ul className="bg-zinc-800 shadow-md rounded">
        {products.map(product => (
          <li key={product.id} className="border-b py-2 px-4 hover:bg-black">
            ID: {product.id} | Nome: {product.name} | Preço: R${product.price} | Categoria: {product.category} | Descrição: {product.description} | Estoque: {product.stock} | Avaliação: {product.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}
