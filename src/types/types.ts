export interface Category {
  id: number,
  name: string,
  flag: string,
  parent_id?: number
}
type CommonCategorySet = {
  categories: Category[],
  category: Category | undefined | Category[] | [],
  highlight: number,
  open: boolean,
}
export interface CategoryState extends CommonCategorySet{
  category: Category | undefined,
}
export interface SubCategoryState extends CommonCategorySet {
  category: Category[] | []
}
export enum CategoryActionTypes {
  GET_CATEGORIES     = 'GET_CATEGORIES',
  SET_CATEGORIES     = 'SET_CATEGORIES',
  DELETE_CATEGORY    = 'DELETE_CATEGORY',
  HIGHLIGHT_CATEGORY = 'HIGHLIGHT_CATEGORY',
  TOGGLE_CATEGORY    = 'TOGGLE_CATEGORY',
}
export enum SubCategoryActionTypes {
  GET_SUB_CATEGORIES      = 'GET_SUB_CATEGORIES',
  SET_SUB_CATEGORIES      = 'SET_SUB_CATEGORIES',
  DELETE_SUB_CATEGORY     = 'DELETE_SUB_CATEGORY',
  HIGHLIGHT_SUB_CATEGORY  = 'HIGHLIGHT_SUB_CATEGORY',
  TOGGLE_SUB_CATEGORY     = 'TOGGLE_SUB_CATEGORY',
  DELETE_ONE_SUB_CATEGORY = 'DELETE_ONE_SUB_CATEGORY',
}
interface GetCategoriesAction {
  type: CategoryActionTypes.GET_CATEGORIES;
  payload: Category[]
}
interface SetCategoriesAction {
  type: CategoryActionTypes.SET_CATEGORIES;
  payload: Category
}
interface DeleteCategoryAction {
  type: CategoryActionTypes.DELETE_CATEGORY;
  payload: Category
}
interface HighlightCategoryAction {
  type: CategoryActionTypes.HIGHLIGHT_CATEGORY;
  payload: number
}
interface ToggleCategoryAction {
  type: CategoryActionTypes.TOGGLE_CATEGORY;
  payload: boolean
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
  payload: boolean
}
interface DeleteOneSubCategoryAction {
  type: SubCategoryActionTypes.DELETE_ONE_SUB_CATEGORY;
  payload: Category
}
export type CategoryAction =
  GetCategoriesAction     |
  SetCategoriesAction     |
  DeleteCategoryAction    |
  HighlightCategoryAction |
  ToggleCategoryAction

export type SubCategoryAction =
  GetSubCategoriesAction     |
  SetSubCategoriesAction     |
  DeleteSubCategoryAction    |
  HighlightSubCategoryAction |
  ToggleSubCategoryAction    |
  DeleteOneSubCategoryAction