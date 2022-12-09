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
}) {
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
    if (specialInput <= maxLength) {
      onChange(specialInput, name);
    }
  };

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required={required}
      maxLength={maxLength}
      className={className}
    />
  );
}

CustomInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  maxLength: PropTypes.string,
  className: PropTypes.string,
};

CustomInput.defaultProps = {
  value: '',
  type: 'text',
  required: false,
  maxLength: '',
  placeholder: '',
  className: '',
};

export default CustomInput;
