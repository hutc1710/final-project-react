import { configureStore, createSlice } from "@reduxjs/toolkit";

//create variables that we want redux to store for us
const initialAuthState = {
  user: null,
  token: null,
};

/*
    this is a redux toolkit pattern to
    create the store for redux it self
    create actions/reducers to manipulate 
    the state of redux and not the state of react
*/
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("tokenKey");
    },
  },
});

//export the actions, so we can modify the variables from other components
export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});

//exoirt the auth slice, we can tell redux about the changes we created here
export default authSlice.reducer;
