import PropTypes from 'prop-types';

function CustomInput({
  value,
  type,
  name,
  placeholder,
  onChange,
}) {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

CustomInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

CustomInput.defaultProps = {
  value: '',
  type: 'text',
};

export default CustomInput;
