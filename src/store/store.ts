// src/store/index.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from "redux-saga";
import { productSlice } from "./reducers/products";

import rootSaga from "./reducers";

const rootReducer = combineReducers({
  // [authSlice.name]: (authSlice as any).reducer,
  [productSlice.name]: (productSlice as any).reducer,
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

// Run Saga Middleware
sagaMiddleware.run(rootSaga);

// Persisted Store
const persistor = persistStore(store);

export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore["dispatch"];

export { store, persistor };
