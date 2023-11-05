import { CategoryActionTypes, SubCategoryActionTypes } from "./../types/types"


export const getSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.GET_SUB_CATEGORIES, payload})
export const setSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.SET_SUB_CATEGORIES, payload})
export const deleteSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.DELETE_SUB_CATEGORY, payload})
export const highlightSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.HIGHLIGHT_SUB_CATEGORY, payload})
export const toggleSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.TOGGLE_SUB_CATEGORY, payload})
export const deleteOneSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.DELETE_ONE_SUB_CATEGORY, payload})


export const getCategoriesAction = (payload) => ({type: CategoryActionTypes.GET_CATEGORIES, payload})
export const setCategoriesAction = (payload) => ({type: CategoryActionTypes.SET_CATEGORIES, payload})
export const deleteCategoriesAction = (payload) => ({type: CategoryActionTypes.DELETE_CATEGORY, payload})
export const highlightCategoriesAction = (payload) => ({type: CategoryActionTypes.HIGHLIGHT_CATEGORY, payload})
export const toggleCategoriesAction = (payload) => ({type: CategoryActionTypes.TOGGLE_CATEGORY, payload})
