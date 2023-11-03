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
const initialState: CategoryState = {
  categories: [],
  category: undefined,
  highlight: 0,
  open: false
}
