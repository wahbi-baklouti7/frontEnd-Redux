import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleslice"
import cartReducer from "../features/cartslice"
import categoriesReducer from "../features/categoryslice"
const store = configureStore({
reducer: {
// storearticles:articlesReducer,
        article: articlesReducer,
        storeCart: cartReducer,
    storeCategories: categoriesReducer,
}
})
export default store