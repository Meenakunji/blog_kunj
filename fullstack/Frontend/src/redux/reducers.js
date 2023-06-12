import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import user from "./slices/user";

const rootPersistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
