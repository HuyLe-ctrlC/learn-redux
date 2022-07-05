import { configureStore } from '@reduxjs/toolkit'

import postReducer from '../features/posts/PostSlice'
import usersReducer from '../features/users/UsersSlice'
import notificationsReducer from '../features/notifications/NotificationsSlice'

export default configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  },
})
