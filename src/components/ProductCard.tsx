import { useCart } from "../context/CartContext";
import QuantityControls from "./QuantityControls";

type Product = {
  id: string;
  name: string;
  price: number;
  mrp: number;
  discount: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { state, dispatch } = useCart();
  const qty = state[product.id] || 0;

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow-sm">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2" />
      <h3 className="font-semibold text-center">{product.name}</h3>
      <div className="flex gap-2 items-center">
        <span className="text-lg font-bold">₹{product.price}</span>
        <span className="line-through text-sm text-gray-500">₹{product.mrp}</span>
        <span className="text-green-600 text-sm">({product.discount}% off)</span>
      </div>
      {qty === 0 ? (
        <button
          className="mt-2 bg-brand text-white px-4 py-1 rounded"
          onClick={() => dispatch({ type: "ADD_ONE", id: product.id })}
        >
          Add
        </button>
      ) : (
        <div className="mt-2">
          <QuantityControls id={product.id} qty={qty} />
        </div>
      )}
    </div>
  );
}
