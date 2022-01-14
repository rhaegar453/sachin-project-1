import react from "react";
import './index.css'

const Button=({children, type, ...rest})=>{
    return(
        <button className={type||'primary'}  {...rest} >{children}</button>
    );
}


export default Button;