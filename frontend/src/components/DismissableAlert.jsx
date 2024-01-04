import React, { useState, useEffect } from "react";

export default function DismissableAlert({
  message,
  onClose,
  backgroundColor,
}) {
  const [dismissed, setDismissed] = useState(false);
  const [timerWidth, setTimerWidth] = useState(100);

  useEffect(() => {
    let timer;
    let startTime = Date.now();

    if (!dismissed) {
      // Set a timer to automatically dismiss the alert after 3000 milliseconds (3 seconds)
      timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 3000 - elapsed);
        const percentage = (remaining / 3000) * 100;

        setTimerWidth(percentage);

        if (remaining === 0) {
          setDismissed(true);
          if (onClose) {
            onClose();
          }
          clearInterval(timer);
        }
      }, 100); // Update the progress bar every 100 milliseconds
    }

    return () => {
      // Clear the timer on component unmount or when alert is dismissed
      clearInterval(timer);
    };
  }, [dismissed, onClose]);

  const handleDismiss = () => {
    setDismissed(true);
    if (onClose) {
      onClose();
    }
  };

  return !dismissed ? (
    <div
      style={{ backgroundColor: backgroundColor }}
      className={`custom-alert ${dismissed ? "dismissed" : ""}`}
    >
      {!dismissed && (
        <>
          <button type="button" className="close" onClick={handleDismiss}>
            &times;
          </button>
          <h4 className="alert-heading">{message}</h4>
          <div className="timer-bar" style={{ width: `${timerWidth}%` }}></div>
        </>
      )}
    </div>
  ) : null;
}
