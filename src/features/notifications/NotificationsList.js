import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  allNotificationsRead,
  selectAllNotifications,
} from './NotificationsSlice'
import { selectAllUsers } from './../users/UsersSlice'
import { parseISO, formatDistanceToNow } from 'date-fns'
import classnames from 'classnames'

export const NotificationsList = () => {
  const dispatch = useDispatch()

  const notifications = useSelector(selectAllNotifications)
  const users = useSelector(selectAllUsers)

  useLayoutEffect(() => {
    dispatch(allNotificationsRead())
  })

  const renderedNotifications = notifications.map((notification) => {
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)
    const user = users.find((user) => user.id === notification.user) || {
      name: 'Unknown User',
    }

    const notificationClassname = classnames('notification', {
      new: notification.isNew,
    })

    return (
      <div key={notification.id} className={notificationClassname}>
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.title}>
          <i>{timeAgo} ago</i>
        </div>
      </div>
    )
  })
  return (
    <section>
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  )
}
