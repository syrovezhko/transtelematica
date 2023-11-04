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
  GET_SUB_CATEGORIES      = 'GET_SUB_CATEGORIES',
  SET_SUB_CATEGORIES      = 'SET_SUB_CATEGORIES',
  DELETE_SUB_CATEGORY     = 'DELETE_SUB_CATEGORY',
  HIGHLIGHT_SUB_CATEGORY  = 'HIGHLIGHT_SUB_CATEGORY',
  TOGGLE_SUB_CATEGORY     = 'TOGGLE_SUB_CATEGORY',
  DELETE_ONE_SUB_CATEGORY = 'DELETE_ONE_SUB_CATEGORY',
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
interface DeleteOneSubCategoryAction {
  type: SubCategoryActionTypes.DELETE_ONE_SUB_CATEGORY;
  payload: Category
}

export type SubCategoryAction =
  GetSubCategoriesAction     |
  SetSubCategoriesAction     |
  DeleteSubCategoryAction    |
  HighlightSubCategoryAction |
  ToggleSubCategoryAction    |
  DeleteOneSubCategoryAction

const initialState: CategoryState = {
  categories: [],
  category: [],
  highlight: 0,
  open: false
}

export const itemReducer = (state = initialState, action: SubCategoryAction): CategoryState => {
  switch (action.type) {
    case SubCategoryActionTypes.GET_SUB_CATEGORIES:
      return { ...state, categories: [...state.categories, ...action.payload] }

    case SubCategoryActionTypes.SET_SUB_CATEGORIES:
      return { ...state, category: [...state.category, action.payload] }

    case SubCategoryActionTypes.DELETE_SUB_CATEGORY:
      return { ...state, category: [] }

    case SubCategoryActionTypes.HIGHLIGHT_SUB_CATEGORY:
      return { ...state, highlight: action.payload }

    case SubCategoryActionTypes.TOGGLE_SUB_CATEGORY:
      return { ...state, open: !state.open }

    case SubCategoryActionTypes.DELETE_ONE_SUB_CATEGORY:
      return { ...state, category: state.category.filter((o) => o !== action.payload) }

    default:
      return state
  }
}

export const getSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.GET_SUB_CATEGORIES, payload})
export const setSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.SET_SUB_CATEGORIES, payload})
export const deleteSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.DELETE_SUB_CATEGORY, payload})
export const highlightSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.HIGHLIGHT_SUB_CATEGORY, payload})
export const toggleSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.TOGGLE_SUB_CATEGORY, payload})
export const deleteOneSubCategoriesAction = (payload) => ({type: SubCategoryActionTypes.DELETE_ONE_SUB_CATEGORY, payload})
