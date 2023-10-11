import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/CartSlice";
import logger from "redux-logger";
import AuthSlice from "@/features/Auth/AuthSlice";

export default configureStore({
  reducer: {
    cart: CartSlice,
    auth: AuthSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
