import "./index.css";
//creates button, where implemented will enact specification stated on that page
const Button = ({ children, onClick }) => (
  <button type="button" className="Button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
