import { useState } from "react";

export default function DismissableAlert({ message, moreinfo }) {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
  };

  return (
    <div className={`custom-alert ${dismissed ? "dismissed" : ""}`}>
      {!dismissed && (
        <>
          <button type="button" className="close" onClick={handleDismiss}>
            &times;
          </button>
          <h4 className="alert-heading">{message}</h4>
          <p>{moreinfo}</p>
        </>
      )}
    </div>
  );
}
