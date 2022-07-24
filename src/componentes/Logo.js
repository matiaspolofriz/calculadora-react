import "../App.css";
import logoMP from "../imagenes/icon-mp.png";

function Logo() {
  return (
    <div className="logo-contenedor">
      <img src={logoMP} className="logo" alt="Logo" />
    </div>
  );
}

export default Logo;
