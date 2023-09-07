import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "Please enter your first name",
  },
  lastName: {
    type: String,
    required: "Please enter your last name",
  },
  password: {
    type: String,
    required: '"Please enter a password.',
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
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