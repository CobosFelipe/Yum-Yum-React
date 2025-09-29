import { toast } from "react-toastify";

export const Toastify = ({type, text, btnText, onClick, className}) => {
  let notify = () => toast(`${text}`,{
    position: "top-center",
  });
  if (type === "Error") {
    notify = () => toast.error(text, { position: "top-center" });
  } else if (type === "Alerta") {
    notify = () => toast.warn(text, { position: "top-center" });
  }
  
  const handleClick = () => {
    notify();
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={className}>{btnText}</button>
  )
}
