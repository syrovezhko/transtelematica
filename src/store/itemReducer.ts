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

const initialState: CategoryState = {
  categories: [],
  category: [],
  highlight: 0,
  open: false
}

