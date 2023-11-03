interface Category {
  id: number,
  name: string,
  flag: string
}

interface CategoryState {
  categories: Category[],
  category: Category | undefined,
  highlight: number,
  open: boolean,
}

export enum CategoryActionTypes {
  GET_CATEGORIES     = 'GET_CATEGORIES',
  SET_CATEGORIES     = 'SET_CATEGORIES',
  DELETE_CATEGORY    = 'DELETE_CATEGORY',
  HIGHLIGHT_CATEGORY = 'HIGHLIGHT_CATEGORY',
  TOGGLE_CATEGORY    = 'TOGGLE_CATEGORY',
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
  payload: Category
}

export type CategoryAction =
  GetCategoriesAction     |
  SetCategoriesAction     |
  DeleteCategoryAction    |
  HighlightCategoryAction |
  ToggleCategoryAction

const initialState: CategoryState = {
  categories: [],
  category: undefined,
  highlight: 0,
  open: false
}

export const categoryReducer = (state = initialState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    case CategoryActionTypes.GET_CATEGORIES:
      return { ...state, categories: [...state.categories, ...action.payload] }

    default:
      return state
  }
}

export const getCategoriesAction = (payload) => ({type: CategoryActionTypes.GET_CATEGORIES, payload})
