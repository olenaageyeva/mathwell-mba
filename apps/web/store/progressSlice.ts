import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface progressState {
    progress: number[];
}

// Initial state
const initialState: progressState = {
    progress: [],
};

// Actual Slice
export const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {

        // Action to set the authentication status
        setProgressState(state, action) {
            state.progress = action.payload;
        },
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action: any) => {
                return {
                    ...state,
                    ...action.payload.process,
                };
            })
    },

});

export const { setProgressState } = progressSlice.actions;

export const selectProgressState = (state: AppState) => state.progress.progress;

export default progressSlice.reducer;