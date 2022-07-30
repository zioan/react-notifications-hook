import { createContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationArray, setNotificationArray] = useState([]);

  const notificationLifespan = 3000; //time for active notification (ms)

  const addNotification = (newNotification) => {
    setNotificationArray((prevState) => [...prevState, newNotification]);
  };

  setInterval(() => {
    let notifications = notificationArray;
    notifications.forEach(function (item) {
      if (Date.now() - notificationLifespan > item.createdAt) {
        setNotificationArray((prevState) =>
          prevState.filter((notification) => notification !== item)
        );
      }
    });
  }, 1000);

  return (
    <NotificationContext.Provider
      value={{ notificationArray, addNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
export default NotificationContext;
