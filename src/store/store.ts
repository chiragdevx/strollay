import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { productSlice } from "./reducers/products";
import { userSlice } from "./reducers/user";

import rootSaga from "./reducers/index";
import { cartSlice } from "./reducers/cart";

const rootReducer = combineReducers({
  [productSlice.name]: (productSlice as any).reducer,
  [userSlice.name]: (userSlice as any).reducer,
  [cartSlice.name]: (cartSlice as any).reducer,
});

export type RootState = ReturnType<typeof store.getState>;

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
      serializableCheck: false,
    }).concat(middleware) as any,
});

// Run Saga Middleware.
sagaMiddleware.run(rootSaga);

// Persisted Store
const persistor = persistStore(store);

export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore["dispatch"];

export { store, persistor };
