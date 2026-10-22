"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { CartItem, Product, PackSize } from "./types";
import { deliveryConfig } from "./store-data";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, packSize?: PackSize, quantity?: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  subtotal: number;
  deliveryFee: number;
  total: number;
  totalCount: number;
  freeDeliveryRemaining: number;
  mounted: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "abad_cart_v2";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
    setMounted(true);
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to persist cart", e);
    }
  }, [items, mounted]);

  const addItem = (product: Product, selectedPack?: PackSize, qty: number = 1) => {
    const pack = selectedPack || product.packSizes[0] || {
      labelBn: product.unitBn,
      labelEn: product.unitEn,
      weight: product.unitEn,
      price: product.price,
      originalPrice: product.originalPrice,
    };

    const itemId = `${product.id}-${pack.weight.replace(/\s+/g, "_")}`;

    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qty,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            id: itemId,
            productId: product.id,
            slug: product.slug,
            brand: product.brand,
            nameBn: product.nameBn,
            nameEn: product.nameEn,
            image: product.image,
            packSize: pack,
            unitPrice: pack.price,
            quantity: qty,
          },
        ];
      }
    });

    // Auto-open drawer when user adds to cart
    setIsDrawerOpen(true);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  // Financial calculations
  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  }, [items]);

  const totalCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const deliveryFee = useMemo(() => {
    if (items.length === 0) return 0;
    if (subtotal >= deliveryConfig.freeDeliveryThreshold) return 0;
    return deliveryConfig.baseFee;
  }, [items, subtotal]);

  const total = useMemo(() => {
    return subtotal + deliveryFee;
  }, [subtotal, deliveryFee]);

  const freeDeliveryRemaining = useMemo(() => {
    const diff = deliveryConfig.freeDeliveryThreshold - subtotal;
    return diff > 0 ? diff : 0;
  }, [subtotal]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        subtotal,
        deliveryFee,
        total,
        totalCount,
        freeDeliveryRemaining,
        mounted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
