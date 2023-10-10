import {PayloadAction, createSlice} from "@reduxjs/toolkit"

interface IStepSlice {
  FormStage: number,
  FormStepOtp:number,
  FormSignUp:number,
  
}

const stepsSlice = createSlice({
  name:"stepsSlice",

  initialState: {
    FormStage: 1,
    FormStepOtp: 0,
    FormSignUp: 0,
    FormEmail: ""
  },

  reducers: {
    formStage: (state,action: PayloadAction<number>) => {state.FormStage = action.payload},
    formStepOtp: (state,action: PayloadAction<number>) => {state.FormStepOtp = action.payload},
    formSignUp: (state,action: PayloadAction<number>) => {state.FormSignUp = action.payload},
    formEmail: (state,action: PayloadAction<string>) => {state.FormEmail = action.payload},
  }
}) 

export const {formStage,formStepOtp,formSignUp,formEmail} = stepsSlice.actions
export const stepsReducer =stepsSlice.reducer