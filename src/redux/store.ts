import { configureStore, Action, ThunkAction, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage'
import customStorage from './customStorage'

import thunk from "redux-thunk";

import {stepsReducer} from "./reducers/stageSlice"
import {forgotReducer} from "./reducers/forgotSlice"

const reducers = combineReducers({
  stepsReducer,
  forgotReducer
});

const config = {
  key: "root",
  storage: customStorage
}

const rootReducers = persistReducer(config, reducers)

export const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;