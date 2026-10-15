import OptionButton from "./OptionButton";

const Options = ({ options, selected, handleOptionClick }) => {
  return (
    <div className="options">
      {options.map((option) => (
        <OptionButton
          title={option}
          key={options.indexOf(option)}
          selected={selected}
          disabled={selected !== null}
          handleOptionClick={handleOptionClick}
        />
      ))}
    </div>
  );
};

export default Options;
