const TitleButtonsStyle = () => {
  return (
    <style jsx>{`
      .btn-ctrl {
        width: 40px;
        height: 40px;
        border: solid 1px rgb(54, 58, 61);
        margin: 5px 3px;
        // border-right: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .btn-ctrl-inside > div.active {
        color: #6d6d6d;
        transition: 0.3s ease-in;
      }
      .btn-ctrl-inside > div {
        color: #6d6d6d00;
        transition: 0.2s ease-in;
      }
      .btn-ctrl-inside {
        transition: 0.7s ease-in;
        width: 25px;
        height: 25px;
        border-radius: 1px;
        background: rgb(227, 228, 222);
        // background: rgb(240, 248, 204);
        border: solid 1px rgb(17, 5, 1);
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.8),
          inset 0 0 3px rgba(0, 0, 0, 1), 0 0 1px rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .btn-ctrl-inside.active {
        transition: 0.4s ease-in;
        width: 25px;
        height: 25px;
        border-radius: 3px;
        border: solid 1px rgb(165, 150, 86);
        background: rgb(255, 230, 8);
        // background: rgb(248, 227, 42);
        // background: rgb(210, 248, 42);

        box-shadow: 0 0 5px rgba(209, 209, 209, 0.8),
          0 0 3px rgb(214, 214, 214), inset 0 0 4px rgba(228, 228, 228, 0.9),
          0px 0px 2px rgba(0, 0, 0, 1);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .title-buttons-right {
        display: flex;
        width: 300px;
        flex-direction: row-reverse;
      }
      .btn-mini {
        cursor: pointer;
        color: #152125;
        padding: 2px 8px;
      }
    `}</style>
  );
};

export default TitleButtonsStyle