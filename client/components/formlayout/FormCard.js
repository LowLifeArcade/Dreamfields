import React from 'react';

const FormCard = ({ children, title }) => {
  return (
    <>
      <div className="item-container">
        <h1 className="item-title">{title}</h1>
        {children}
      </div>
      <style jsx>{`
        .item-title {
          padding-bottom: 20px;
          text-align: center;
          color: rgb(114, 114, 114);
        }
        .item-container {
          padding: 50px;
          background: #fff;
          margin: 20px 5px;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
          width: 600px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default FormCard;
