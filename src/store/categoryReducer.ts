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
const initialState: CategoryState = {
  categories: [],
  category: undefined,
  highlight: 0,
  open: false
}
