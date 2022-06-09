import "../App.css";
import logoReact from "../imagenes/react.png";

function Logo() {
  return (
    <div className="logo-contenedor">
      <img src={logoReact} className="logo" alt="Logo" />
    </div>
  );
}

export default Logo;
