import PropTypes from 'prop-types';

function CustomInput({
  value,
  type,
  name,
  placeholder,
  onChange,
  required,
}) {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required={required}
    />
  );
}

CustomInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

CustomInput.defaultProps = {
  value: '',
  type: 'text',
  required: false,
};

export default CustomInput;
