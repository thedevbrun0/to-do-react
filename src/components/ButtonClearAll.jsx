import "./Styles/ButtonClearAll.css";

const ButtonClearAll = (props) => {
  return (
    <button className="clearAll" onClick={props.event}>
      Apagar Lista
    </button>
  );
};

export { ButtonClearAll };
