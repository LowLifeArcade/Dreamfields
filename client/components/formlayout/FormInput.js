const FormInput = ({
  name,
  htmlFor,
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <>
      <div className="section">
        <label className="label" htmlFor={htmlFor}>
          {htmlFor}
        </label>
        <input
          value={value}
          onChange={name ? onChange : (e) => onChange(e.target.value)}
          className="input"
          type={type}
          name={name} // use this field to handle state with [e.target.name]: [e.target.value] in the object
          autoComplete={'text' && true}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      <style jsx>{`
        .section {
          padding: 3px 0px;
          margin-bottom: 3px;
        }

        .label {
          color: #333;
          font-size: small;
          color: rgb(105, 100, 85);
        }

        .input {
          margin: 5px 0;
          margin-top: 9px;
          padding: 8px;
          width: 100%;
          border: solid 1px rgb(196, 188, 163);
          border-radius: 3px;
        }
      `}</style>
    </>
  );
};

export default FormInput;
