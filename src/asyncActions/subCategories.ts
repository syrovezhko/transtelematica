import {SubCategoryAction} from "./../types/types"
import { Dispatch } from "../../node_modules/redux/index";
import subCategories from './../data/subCategories.json';
import { getSubCategoriesAction } from "../store/userActions";

const emulateAPI = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(subCategories), 0);
});

export const fetchSubCategories = () => {
  return async (dispatch: Dispatch<SubCategoryAction>) => {
    const data = await emulateAPI();
    dispatch(getSubCategoriesAction(data));
  };
};

// TODO: rewrite for real server
// export const fetchSubCategories = () => {
//   return dispatch => {
//     fetch('URL')
//       .then(response => response.json())
//       .then(json => dispatch(getSubCategoriesAction(json)))
//   }
// }