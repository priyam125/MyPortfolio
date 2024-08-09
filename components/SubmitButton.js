import React, { useState } from 'react';
import './SubmitButton.css'; // Import your CSS file

const SubmitButton = ({ text, onClick, disabled, successText, errorText }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (disabled) return;

    setIsAnimating(true);

    try {
      await onClick(); // Replace with your actual API call
      setIsAnimating(false);
      // Show success animation or message (optional)
    } catch (error) {
      setIsAnimating(false);
      // Show error animation or message (optional)
    }
  };

  const buttonClasses = `button ${isAnimating ? 'animate' : ''}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isAnimating}
      onClick={handleClick}
    >
      {isAnimating
        ? '' // Hide text while animating
        : text}
      {isAnimating && successText && (
        <span className="success-text">{successText}</span>
      )}
      {isAnimating && errorText && (
        <span className="error-text">{errorText}</span>
      )}
    </button>
  );
};

export default SubmitButton;
