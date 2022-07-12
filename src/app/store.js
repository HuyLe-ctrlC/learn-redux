import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import postReducer from '../features/posts/PostSlice'
import notificationsReducer from '../features/notifications/NotificationsSlice'
import { apiSlice } from '../features/api/apiSlice'

export default configureStore({
  reducer: {
    posts: postReducer,
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
