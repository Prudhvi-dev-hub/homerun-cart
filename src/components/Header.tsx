import CartIcon from "./icons/CartIcon";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalCount } = useCart();

  return (
    <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src="https://home-run.co/cdn/shop/files/Logo_8.png?v=1750399230&width=60" alt="Cement Store Logo" className="h-8 w-8" />
        <span className="font-bold text-lg">HomeRun</span>
      </div>

      {/* Right: Cart */}
      <div className="relative">    
        <CartIcon/>
        {totalCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            {totalCount}
          </span>
        )}
      </div>
    </header>
  );
}
