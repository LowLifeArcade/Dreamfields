const FormInput = ({ htmlFor, type, placeholder, value, onChange }) => {
  return (
    <>
      <div className="section">
        <label className="label" htmlFor={htmlFor}>
          {htmlFor}
        </label>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="input"
          type={type}
          placeholder={placeholder}
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
