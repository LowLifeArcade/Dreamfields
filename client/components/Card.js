import React from 'react';

const Card = ({ children, title, img, imgTitle, imgSubTitle }) => {
  return (
    <div className="body">
      <div className="sideImage">
        <h1>
        {imgTitle}
        </h1>
        <p>
        {imgSubTitle}
        </p>
      </div>
      <div className="form">
        <div className="title">{title}</div>
        {children}
      </div>
      <style jsx>
        {`
          .body {
            margin-top: 70px;
            display: flex;
            width: 900px;
            height: 600px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
            border: solid rgb(209, 206, 199) 10px;
            border-radius: ;
          }
          .title {
            border: solid 1px;
            padding: 10px 30px ;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 100;
            font-size: 2rem;
            margin-bottom: 2rem;
            color: rgb(116, 109, 104);
            border-radius: 2px;
          }
          .sideImage {
            width: 80%;
            background: url(${img}) center center/cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 80px;
            color: rgb(83, 83, 83);
          }
          .sideImage > h1 {
            font-size: 4rem;
            font-weight: 400;
            border: solid 1px;
            padding: 20px 30px;
          }

          .sideImage > p {
            margin-top: 10px;
          }
          .form {
            width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 50px;
            background: rgb(247, 240, 232);
          }

          @media (max-width: 950px) {
            .sideImage {
              display: none;
            }
            .body {
              width: 300px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Card;
