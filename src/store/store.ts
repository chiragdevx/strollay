// src/store/index.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from "redux-saga";
import rootSaga from "./middlewares/index";
import { productSlice } from "./reducers/products";
import { categorySlice } from "./reducers/categories";
import { cartSlice } from "./reducers/cart";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { boxSlice } from "./reducers/box";
import { bundlesSlice } from "./reducers/bundles";
import { PlansSlice } from "./reducers/plans";
import { paymentInfo } from "./reducers/payment-info";
import { orderInfoSlice } from "./reducers/order";
import { variantOptionsSlice } from "./reducers/variant-options";

const rootReducer = combineReducers({
  // [authSlice.name]: (authSlice as any).reducer,
  [productSlice.name]: (productSlice as any).reducer,
  [variantOptionsSlice.name]: (variantOptionsSlice as any).reducer,
  [categorySlice.name]: (categorySlice as any).reducer,
  [cartSlice.name]: (cartSlice as any).reducer,
  [boxSlice.name]: (boxSlice as any).reducer,
  [bundlesSlice.name]: (bundlesSlice as any).reducer,
  [PlansSlice.name]: (PlansSlice as any).reducer,
  [paymentInfo.name]: (paymentInfo as any).reducer,
  [orderInfoSlice.name]: (orderInfoSlice as any).reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export type { RootState };
// Persist Configuration
const persistConfig = {
  key: "root",
  storage, 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Store Creation
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware) as any,
});

// Run Saga Middleware
sagaMiddleware.run(rootSaga);

// Persisted Store
const persistor = persistStore(store);

export { store, persistor };
