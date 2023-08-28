import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import layout from "./slices/layout";
import user from "./slices/user";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const rootPersistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user"],
};

const layoutPersistConfig = {
  key: "layout",
  storage: storage,
};

const userPersistConfig = {
  key: "user",
  storage: storage,
  // Add any additional configuration options if needed
};

const rootReducer = combineReducers({
  layout: persistReducer(layoutPersistConfig, layout),
  user: persistReducer(userPersistConfig, user), // Apply persistReducer to the user slice
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
