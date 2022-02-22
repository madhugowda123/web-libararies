import React from "react";
import addNotification from "react-push-notification";

const NotificationComponent = () => {
  const buttonClick = () => {
    console.log(`clicked`);
    addNotification({
      title: "Notification",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      theme: "darkblue",
      // native: true // when using native, your OS will handle theming.
      onClick: (e) => {
        alert("hiiii");
      },
    });
  };

  return (
    <div
      className="page"
      style={{
        width: 300,
        display: "flex",
        marginTop: 10,
        marginLeft: "44%",
      }}
    >
      <button
        onClick={buttonClick}
        className="button"
        style={{
          backgroundColor: "blue",
          color: "white",
          borderRadius: 15,
          padding: 10,
        }}
      >
        Click to see the Notificaation.
      </button>
    </div>
  );
};

export default NotificationComponent;
