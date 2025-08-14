import { useCart } from "../context/CartContext";

export default function QuantityControls({ id, qty }: { id: string; qty: number }) {
  const { dispatch } = useCart();
  const MAX = 20;
  const atMax = qty >= MAX;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-1">
        <button
          onClick={() => dispatch({ type: "SUB_FIVE", id })}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          {"<<"}
        </button>
        <button
          onClick={() => dispatch({ type: "SUB_ONE", id })}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          {"-"}
        </button>
        <span className="px-3">{qty}</span>
        <button
          onClick={() => dispatch({ type: "ADD_ONE", id })}
          disabled={atMax}
          className={`px-2 py-1 rounded ${atMax ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200"}`}
        >
          {"+"}
        </button>
        <button
          onClick={() => dispatch({ type: "ADD_FIVE", id })}
          disabled={atMax}
          className={`px-2 py-1 rounded ${atMax ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200"}`}
        >
          {">>"}
        </button>
      </div>
      {atMax && (
        <p className="text-xs text-red-600">
          Maximum 20 allowed per order. Please place another order if required.
        </p>
      )}
    </div>
  );
}
