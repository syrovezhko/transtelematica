import { Dispatch } from "../../node_modules/redux/index";
import {CategoryAction} from "./../types/types"
import categories from './../data/categories.json';
import { getCategoriesAction } from "../store/userActions";

const emulateAPI = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(categories), 0);
});

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    const data = await emulateAPI();
    dispatch(getCategoriesAction(data));
  };
};

// TODO: rewrite for real server
// export const fetchCategories = () => {
//   return dispatch => {
//     fetch('URL')
//       .then(response => response.json())
//       .then(json => dispatch(getCategoriesAction(json)))
//   }
// }