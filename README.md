# DigiTools

DigiTools হলো একটি React + Vite ভিত্তিক responsive product showcase এবং cart management web app।
এই project-এ user product list দেখতে পারে, cart-এ add করতে পারে, item remove করতে পারে এবং checkout করতে পারে।

## Features

- Responsive `Navbar` (desktop + mobile menu)
- Navbar-এ live cart counter
- Hero `Banner` section
- `Stats` section (Active Users, Premium Tools, Rating)
- `Products` tab থেকে dynamic product list load (`public/products.json`)
- Products loading ও error handling state
- `Buy Now` এ product cart-এ add হয়
- একই product duplicate add prevent করা হয়েছে
- `Cart` tab-এ added items দেখা যায়
- Cart item remove করা যায়
- Cart total price auto calculate হয়
- `Proceed to Checkout` দিলে cart empty হয় এবং success message দেখায়
- Reusable `Footer` with link groups and social icons

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- DaisyUI
- Lucide React Icons
- React Toastify
- ESLint

## Project Structure

```text
src/
  components/
    Banner/
    Cart/
    Footer/
    Navbar/
    Products/
    Stats/
  assets/
  App.jsx
  main.jsx
public/
  products.json
  assets/products/
```

## Product Data Source

Product list `public/products.json` থেকে fetch করা হয়।
প্রতি product object-এ প্রধানত নিচের field থাকে:

- `id`
- `name`
- `description`
- `price`
- `period`
- `tag`
- `tagType`
- `features`
- `icon`

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Current Workflow Summary

1. App-level state দিয়ে `activeTab` এবং `carts` manage করা হয়।
2. `Products` component API-style local JSON fetch করে list render করে।
3. `Product` component থেকে `setCarts` ব্যবহার করে cart update করা হয়।
4. `Cart` component এ remove, total calculation, এবং checkout flow handle করা হয়।

## Author

Developed as assignment project: **B13 Assignment 6 - DigiTools**
