import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/CartSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
