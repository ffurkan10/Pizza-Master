import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getCartItemsFromSessionStorage = () => {
  if (typeof window !== "undefined" && sessionStorage) {
    const cartItems = sessionStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
  }
  return [];
};

const initialState = {
  cartItems: getCartItemsFromSessionStorage(),
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isLoading: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      ); // sepet öğeleri arasında aynı id'ye sahip bir ürün var mı diye kontrol ettik

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1; // var ise sepet adedini bir arttır
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }; // yok ise ürünü sepete ekler
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} sepetinize eklendi`);
      }
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    remove: (state, action) => {
      // sepet öğelerinden action.payload ile belirtilen id'ye sahip ürün filtrelendi.
      const nextCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      toast.info(`${action.payload.title} sepetinizden çıkarıldı`);
      sessionStorage.setItem("cartItems", JSON.stringify(nextCartItems));
    },

    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      ); // Azaltma işlemi yapılırken aynı şekilde sepet öğeleri arasındaki ürün bulundu
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        // adedi 1'den fazla ise bir azaltıldı
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        // 1 ise tamamen sepetten çıkarıldı
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        toast.info(`${action.payload.title} silindi`);
        state.cartItems = nextCartItems;
        sessionStorage.setItem("cartItems", JSON.stringify(nextCartItems));
      }
    },
  },
});

export const { addToCart, remove, decreaseCart } = CartSlice.actions;
export default CartSlice.reducer;
