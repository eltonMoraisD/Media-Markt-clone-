import { PayloadAction, createSlice } from "@reduxjs/toolkit"


const stepsSlice = createSlice({
  name: "stepsSlice",

  initialState: {
    FormStage: 1,
    FormEmail: "",
    FormFirstName: "",
    FormLastName: "",
    Secret: ""
  },

  reducers: {
    formStage: (state, action: PayloadAction<number>) => { state.FormStage = action.payload },
    formEmail: (state, action: PayloadAction<string>) => { state.FormEmail = action.payload },
    formFirstName: (state, action: PayloadAction<string>) => { state.FormFirstName = action.payload },
    formLastName: (state, action: PayloadAction<string>) => { state.FormLastName = action.payload },
    secret: (state, action: PayloadAction<string>) => { state.Secret = action.payload },

  }
})

export const { formStage, formEmail, secret, formFirstName, formLastName } = stepsSlice.actions
export const stepsReducer = stepsSlice.reducer