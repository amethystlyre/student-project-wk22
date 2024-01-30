import { configureStore } from '@reduxjs/toolkit'

import carsReducers from './reducers';


export default configureStore({
    reducer: {
      cars: carsReducers,
      //posts: postsReducer,
      //comments: commentsReducer
    }
  })