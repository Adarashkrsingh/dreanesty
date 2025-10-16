import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  listings: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.listings = [];
    },
    setListings: (state, action) => {
      state.listings = action.payload.listings;
    },
    setTripList: (state, action) => {
      if (state.user) state.user.tripList = action.payload;
    },
    setWishList: (state, action) => {
      if (state.user) state.user.wishList = action.payload;
    },
    setPropertyList: (state, action) => {
      if (state.user) state.user.propertyList = action.payload;
    },
    setReservationList: (state, action) => {
      if (state.user) state.user.reservationList = action.payload;
    },
    toggleWishlistItem: (state, action) => {
      if (!state.user) return;

      const propertyId = action.payload;
      const wishList = state.user.wishList || [];

      const exists = wishList.includes(propertyId);

      state.user.wishList = exists
        ? wishList.filter((id) => id !== propertyId)
        : [...wishList, propertyId];
    },
  },
});

export const {
  setLogin,
  setLogout,
  setListings,
  setTripList,
  setWishList,
  setPropertyList,
  setReservationList,
  toggleWishlistItem, // ✅ Export the toggle action
} = userSlice.actions;

export default userSlice.reducer;
