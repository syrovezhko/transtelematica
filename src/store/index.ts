import { combineReducers, applyMiddleware, createStore } from "redux";
import { categoryReducer } from "./categoryReducer";
import { itemReducer } from "./itemReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  category: categoryReducer,
  item: itemReducer,
})

const store = createStore(
                rootReducer,
                composeWithDevTools(applyMiddleware(thunk))
              );

export type RootState = ReturnType<typeof rootReducer>

export default store;