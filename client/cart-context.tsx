import { productSchema } from "@/server/db";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { z } from "zod";
import { getCartFromLocalStorage } from "./local-storage";

export const cartItemSchema = z.object({
  product: productSchema,
  quantity: z.number(),
});

export type CartItemType = z.infer<typeof cartItemSchema>;

export const cartSchema = z.array(cartItemSchema);
export type CartType = z.infer<typeof cartSchema>;

type Context = {
  cart: CartType;
  setCart: Dispatch<SetStateAction<CartType>>;

  isLoaded: boolean;
};

export const CartContext = createContext<Context | null>(null);

interface Props {
  children: ReactNode;
}

export function CartContextProvider({ children }: Props) {
  const [cart, setCart] = useState<CartType>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const cart = getCartFromLocalStorage();
    setCart(cart);
    setIsLoaded(true);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setCart: setCart,

        isLoaded: isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCardContext must be used within a CartContext.Provider");
  }

  return context;
}

