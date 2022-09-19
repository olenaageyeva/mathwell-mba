import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
    authState: boolean;
    user: string;
}

// Initial state
const initialState: AuthState = {
    authState: false,
    user: "User"
};

// Actual Slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        // Action to set the authentication status
        setAuthState(state, action) {
            state.authState = action.payload;
        },
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action: any) => {
                return {
                    ...state,
                    ...action.payload.auth,
                };
            })
    },

});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export const selectUser = (state: AppState) => state.auth.user;

export default authSlice.reducer;