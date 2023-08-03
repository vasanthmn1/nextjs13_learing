import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const Store = configureStore({
    reducer: {
        authSlice
    }
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;