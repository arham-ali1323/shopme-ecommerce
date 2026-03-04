"use client";

import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Shoe } from '@/data/shoes';

export interface CartItem {
  id: string;
  shoe: Shoe;
  size: number;
  color: string;
  quantity: number;
  addedAt: Date;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'id' | 'addedAt'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

const CART_STORAGE_KEY = 'shoestore-cart';

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item =>
          item.shoe.id === action.payload.shoe.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      let newState: CartState;
      if (existingItem) {
        newState = {
          ...state,
          items: state.items.map(item =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        const newItem: CartItem = {
          ...action.payload,
          id: `${action.payload.shoe.id}-${action.payload.size}-${action.payload.color}-${Date.now()}`,
          addedAt: new Date(),
        };
        newState = {
          ...state,
          items: [...state.items, newItem],
        };
      }

      // Save to localStorage
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newState));
      return newState;
    }

    case 'REMOVE_ITEM': {
      const newState = {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newState));
      return newState;
    }

    case 'UPDATE_QUANTITY': {
      const newState = {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0),
      };
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newState));
      return newState;
    }

    case 'CLEAR_CART': {
      const newState = {
        ...state,
        items: [],
      };
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newState));
      return newState;
    }

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true,
      };

    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      };

    case 'LOAD_CART':
      return action.payload;

    default:
      return state;
  }
}

// Load cart from localStorage
function loadCartFromStorage(): CartState {
  if (typeof window === 'undefined') {
    return { items: [], isOpen: false };
  }

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert date strings back to Date objects
      parsed.items = parsed.items.map((item: { addedAt: string }) => ({
        ...item,
        addedAt: new Date(item.addedAt),
      }));
      return parsed;
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }

  return { items: [], isOpen: false };
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  totalItems: number;
  totalPrice: number;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = loadCartFromStorage();
    dispatch({ type: 'LOAD_CART', payload: savedCart });
  }, []);

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.shoe.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ state, dispatch, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
