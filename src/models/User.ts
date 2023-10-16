import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    default: "client",
  },
  gender: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  nif: {
    type: String,
    // required: true
  },
  cif: {
    type: String,

  },
  companyName:{
    type: String
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
 

  address: [
    {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
      address1: {
        type: String,
      },
      address2: {
        type: String,
      },
      city: {
        type: String,
      },
      zipCode: {
        type: String,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
      },
      active: {
        type: Boolean,
        default: false,
      },
    },
  ],

})

type User = mongoose.InferSchemaType<typeof userSchema>;

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;