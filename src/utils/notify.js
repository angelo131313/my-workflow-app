export const notify = (title, options) => {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    }
  };
  