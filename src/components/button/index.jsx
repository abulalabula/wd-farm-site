import './style.css';

function Button({
    children,
    className,
    disabled=false,
    onClick,
    type="button",
    visual="button",
    theme, 
    
}) {
    let typeClass = "submit";
    let buttonClass = "button";

    if (type === "submit") {
        typeClass = "type-submit";
    } 
    if (visual === "link") {
        buttonClass = "button__link";
    } else if (visual === "") {
        buttonClass = "button";
    } else if (visual === "subscribe") {
        buttonClass = "button__subscribe";
    }
    
    return (
    <button
        className={`${buttonClass}--${theme}`}   
        disabled={disabled} 
        type={type}
        visual={visual}
        onClick={onClick}
    >
        {children}
    </button>
    );
}
export default Button;