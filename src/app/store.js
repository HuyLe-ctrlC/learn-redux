import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import postReducer from '../features/posts/PostSlice'
import usersReducer from '../features/users/UsersSlice'
import notificationsReducer from '../features/notifications/NotificationsSlice'
import { apiSlice } from '../features/api/apiSlice'

export default configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
