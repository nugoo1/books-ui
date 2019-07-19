import { createStore as reduxCreateStore } from "redux"
import { navigate } from "gatsby"

const reducer = (state, action) => {
  switch (action.type) {
    case `SET_BOOKS`:
      return {
        ...state,
        books: action.books,
      }
    case `SELECT_BOOK`:
      navigate("/books")
      return {
        ...state,
        book: action.id,
      }
    case `SELECT_CATEGORY`:
      navigate("/order")
      return {
        ...state,
        category: action.category,
      }
    case `SUBMIT_FORM`:
      navigate("/checkout")
      console.log(action.userInfo)
      return {
        ...state,
        userInfo: action.userInfo,
      }
    default:
      return state
  }
}

const initialState = { books: [], book: "", category: "", userInfo: {} }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
