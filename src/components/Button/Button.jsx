import "./Button.css";

function Button(props) {
  return (
    <button onClick={props.handleClick} className="button-primary">
      {props.title}
    </button>
  );
}

export default Button; // Esto sirve para exportar mi componente y que pueda ser reutilizado o usado donde se requiera
