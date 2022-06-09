import "../hojas-de-estilo/BotonIgual.css";

const BotonIgual = (props) => (
  <div className="igual" onClick={() => props.manejarClic(props.children)}>
    {props.children}
  </div>
);

export default BotonIgual;
