import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const forgotSlice = createSlice({
  name: "forgotSlice",

  initialState: {
    FormEmailForgot: ""
  },

  reducers: {
    formEmailForgot: (state, action: PayloadAction<string>) => { state.FormEmailForgot = action.payload }
  }
})

export const {formEmailForgot} = forgotSlice.actions
export const forgotReducer = forgotSlice.reducer