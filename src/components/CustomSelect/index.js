import PropTypes from 'prop-types';

function CustomSelect({
  value,
  name,
  onChange,
  optionTitle,
  optionsArray,
  className,
  required,
}) {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };
  return (
    <select name={name} onChange={handleChange} value={value || ''} className={className} required={required}>
      <option value="" hidden>{optionTitle}</option>
      {optionsArray.map((optgroup) => (
        <optgroup label={optgroup.name} key={optgroup.id} value={optgroup.id}>
          {optgroup.categories.map((option) => (
            <option
              key={option.id}
              value={option.id}
            >
              {option.name}
            </option>
          )) }
        </optgroup>
      ))}
    </select>
  );
}

CustomSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  optionsArray: PropTypes.array.isRequired,
  optionTitle: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

CustomSelect.defaultProps = {
  value: null,
  className: null,
  optionTitle: '',
  required: false,
};

export default CustomSelect;
