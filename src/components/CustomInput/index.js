import PropTypes from 'prop-types';

function CustomInput({
  value,
  type,
  name,
  placeholder,
  onChange,
  required,
  maxLength,
  className,
  checked,
  id,
}) {
  /**
   * Function that processes the value of an input according to the custom type: zpicode & phone
   * Only digit and limit max length
   * @param {string} inputValue
   * @returns string processed
   */
  const specialType = (inputValue) => {
    switch (type) {
      case 'zipcode':
      case 'phone': {
        if (!inputValue.match(`^[0-9]{1,${maxLength}}$`)) {
          return inputValue.replace(/\D+/g, '');
        }
        break;
      }
      default:
        break;
    }
    return inputValue;
  };

  const handleChange = (event) => {
    const specialInput = specialType(event.target.value);
    // If maxLength is set, specialInput cannot exceed it OR maxLength is null
    if ((specialInput.length <= maxLength && maxLength !== null) || maxLength === null) {
      onChange(specialInput, name);
    }
  };

  return (
    <input
      className={className}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value || ''}
      onChange={handleChange}
      checked={checked}
      maxLength={maxLength}
      required={required}
    />
  );
}

CustomInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  maxLength: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string,
};

CustomInput.defaultProps = {
  value: null,
  type: 'text',
  required: false,
  maxLength: null,
  placeholder: null,
  className: null,
  checked: false,
  id: null,
};

export default CustomInput;
