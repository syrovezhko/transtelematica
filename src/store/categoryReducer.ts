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

    case CategoryActionTypes.SET_CATEGORIES:
      return { ...state, category: action.payload }
      
    case CategoryActionTypes.DELETE_CATEGORY:
      return { ...state, category: undefined }

    case CategoryActionTypes.HIGHLIGHT_CATEGORY:
      return { ...state, highlight: action.payload }

    case CategoryActionTypes.TOGGLE_CATEGORY:
      return { ...state, open: !state.open }

    default:
      return state
  }
}

export const getCategoriesAction = (payload) => ({type: CategoryActionTypes.GET_CATEGORIES, payload})
export const setCategoriesAction = (payload) => ({type: CategoryActionTypes.SET_CATEGORIES, payload})
export const deleteCategoriesAction = () => ({type: CategoryActionTypes.DELETE_CATEGORY})
export const highlightCategoriesAction = (payload) => ({type: CategoryActionTypes.HIGHLIGHT_CATEGORY, payload})
export const toggleCategoriesAction = () => ({type: CategoryActionTypes.TOGGLE_CATEGORY})
