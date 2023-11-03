interface Category {
  id: number,
  name: string,
  flag: string
}
const initialState = {
  categories: [],
  category: undefined,
  highlight: 0,
  open: false
}
