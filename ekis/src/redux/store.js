import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import loginReducer from "./login";


const store = configureStore({
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
   login: loginReducer
  },
});

export default store;