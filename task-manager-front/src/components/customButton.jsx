import "./customButton.scss";

const CustomButton = ({ onClick, children }) => {
  return (
    <div className="custom-button-container" onClick={onClick}>
      {children}
    </div>
  );
};
<CustomButton>Adicionar</CustomButton>;

export default CustomButton;
