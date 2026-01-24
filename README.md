# Super Terrific Store

A modern e-commerce application built as a monorepo with React, TypeScript, and Tailwind CSS.

## Overview

This is a full-stack e-commerce demo application that showcases modern React development patterns, monorepo architecture, and component-driven design. The app features a product catalog, shopping cart with localStorage persistence, and a clean, responsive user interface.

## Architecture

This monorepo is organized into focused packages:

- **`app`** - Main React application with routing and layout
- **`catalog`** - Product catalog and product card components
- **`cart`** - Shopping cart functionality with localStorage persistence
- **`shared`** - Shared components, types, and utilities
- **`design`** - Design system and UI presets
- **`typescript`** - Shared TypeScript configuration

## Features

### 🛒 Shopping Cart

- Add/remove products from cart
- localStorage persistence for cart data
- Real-time cart updates with polling
- Visual product thumbnails in cart
- Total price calculation
- Pay button with checkout flow

### 📦 Product Catalog

- Grid layout with responsive design
- Product cards with images, titles, prices, and descriptions
- Star rating display with review counts
- Category badges
- Add to cart functionality
- Scrollable content area

### 🎨 User Interface

- Modern, clean design with Tailwind CSS
- Responsive layout with sidebar cart
- Search input in navigation
- User icon in navbar
- Thank you page after checkout
- Smooth navigation and transitions

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Vite** - Build tool
- **Turbo** - Monorepo build system
- **FakeStore API** - Product data

## Package Structure

```
packages/
├── app/           # Main application with routing and layouts
├── catalog/       # Product catalog and components
├── cart/          # Shopping cart functionality
├── shared/        # Shared components and utilities
├── design/        # Design system tokens
└── typescript/    # TypeScript configurations
```

## Getting Started

### Prerequisites

- Node.js >= 22
- npm >= 10.9.2

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Type Check

```bash
npm run typecheck
```

## Key Implementation Details

### Cart Persistence

The cart uses localStorage to persist product IDs as a JSON array. The cart component polls localStorage every second to detect changes and update the UI in real-time.

### Component Architecture

- Shared components live in the `shared` package
- Each feature (catalog, cart) is its own package
- Icons are reusable SVG components with consistent sizing
- Types are shared across packages for consistency

### Styling

- Tailwind CSS for utility-first styling
- Shared design tokens in the `design` package
- Responsive design with mobile-first approach
- Consistent color scheme and spacing

## Development Workflow

1. Add new features to appropriate packages
2. Shared components go in `shared` package
3. Use TypeScript for type safety
4. Follow the existing component patterns
5. Test in the main app package

## Future Enhancements

- Product search functionality
- Cart quantity controls
- Product categories filtering
- Product details pages
- User authentication
- Order history
- Payment integration
- Product reviews and ratings

## License

© 2026 Super Terrific Store. All rights reserved.
