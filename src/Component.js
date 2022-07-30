// import useNotification in any component you want
import useNotification from './hooks/useNotification';

function Component() {
  const { notificationHandler } = useNotification();

  // call notificationHandler whenever you need a notification
  //can be fetch, form submit ...
  return (
    <>
      <button
        onClick={() =>
          notificationHandler({ type: 'success', message: 'Success Message' })
        }
      >
        Success
      </button>
      <br />
      <button
        onClick={() =>
          notificationHandler({ type: 'error', message: 'Error Message' })
        }
      >
        Error
      </button>
      <br />
      <button
        onClick={() =>
          notificationHandler({ type: 'warning', message: 'Warning Message' })
        }
      >
        Warning
      </button>
    </>
  );
}

export default Component;
