import React from "react";
import products from "./data/products.json";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
