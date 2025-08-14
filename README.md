🛒 HomeRun Cart – Product Listing + Cart Demo

This is a small e-commerce style project I built to demonstrate my frontend skills.
Think of it as a cement store where you can browse products, add them to your cart, adjust quantities, and see everything update instantly.

I followed the HomeRun Full-Stack assignment, but I also added some polish (like cart persistence in localStorage and a cleaner navbar inspired by Home-Run.co) to make it feel closer to a real production app.

✔️ What it does

Shows a grid of cement products with their image, price, MRP, and discount.

Each product starts with an “Add” button. Once clicked, it turns into quantity controls with +1 / -1 / +5 / -5 buttons.

You can’t add more than 20 units of a single product (and you’ll see a friendly error message if you try).

The cart icon in the navbar always shows the total number of items across products, updating in real time.

Everything you add stays in the cart even if you refresh the page, thanks to localStorage.

The design is responsive (mobile → desktop), styled with TailwindCSS, and uses the exact brand green #328616 for the CTAs.

🛠️ How I built it

React 18 + Vite + TypeScript for a fast dev experience.

Context API with useReducer to manage global cart state in a clean, scalable way.

TailwindCSS for utility-first styling and consistent design.

Custom SVG icons (cart icon) instead of plain text, so it looks more professional.

localStorage integration to persist the cart between page reloads.

📂 How the code is organized

src/context/CartContext.tsx → brains of the cart (state + reducer)

src/components/Header.tsx → navbar with logo, links, and cart badge

src/components/ProductCard.tsx → product tile with Add/Qty logic

src/components/QuantityControls.tsx → +1 / -1 / +5 / -5 buttons

src/components/icons/CartIcon.tsx → clean SVG cart icon

src/data/products.json → static list of products

🚀 How to run it yourself

git clone https://github.com/Prudhvi-dev-hub/homerun-cart.git

cd homerun-cart

npm install

npm run dev
