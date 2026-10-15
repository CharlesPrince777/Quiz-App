const OptionButton = ({ title, disabled, handleOptionClick }) => {
  return (
    <button
      className="optionBtn"
      disabled={disabled}
      onClick={handleOptionClick}
    >
      {title}
    </button>
  );
};

export default OptionButton;
