import { CategoryAction, CategoryActionTypes, CategoryState } from "./../types/types"

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