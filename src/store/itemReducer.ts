interface Category {
  id: number,
  name: string,
  flag: string
}

interface CategoryState {
  categories: Category[],
  category: Category[] | [],
  highlight: number,
  open: boolean,
}

export enum SubCategoryActionTypes {
  GET_SUB_CATEGORIES     = 'GET_SUB_CATEGORIES',
  SET_SUB_CATEGORIES     = 'SET_SUB_CATEGORIES',
  DELETE_SUB_CATEGORY    = 'DELETE_SUB_CATEGORY',
  HIGHLIGHT_SUB_CATEGORY = 'HIGHLIGHT_SUB_CATEGORY',
  TOGGLE_SUB_CATEGORY    = 'TOGGLE_SUB_CATEGORY',
}

interface GetSubCategoriesAction {
  type: SubCategoryActionTypes.GET_SUB_CATEGORIES;
  payload: Category[]
}
interface SetSubCategoriesAction {
  type: SubCategoryActionTypes.SET_SUB_CATEGORIES;
  payload: Category
}
interface DeleteSubCategoryAction {
  type: SubCategoryActionTypes.DELETE_SUB_CATEGORY;
  payload: Category
}
interface HighlightSubCategoryAction {
  type: SubCategoryActionTypes.HIGHLIGHT_SUB_CATEGORY;
  payload: number
}
interface ToggleSubCategoryAction {
  type: SubCategoryActionTypes.TOGGLE_SUB_CATEGORY;
  payload: Category
}

export type SubCategoryAction =
  GetSubCategoriesAction     |
  SetSubCategoriesAction     |
  DeleteSubCategoryAction    |
  HighlightSubCategoryAction |
  ToggleSubCategoryAction

const initialState: CategoryState = {
  categories: [],
  category: [],
  highlight: 0,
  open: false
}

