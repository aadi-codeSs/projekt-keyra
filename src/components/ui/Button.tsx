import type { ReactElement } from "react";


type Variants = "primary" | "secondary"


interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    height: ""
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-[#5046e5] text-[#f1f1fd]",
    "secondary": "bg-[#e9ff92] text-[#021402] font-[425]"
}

const sizeStyles = {
    "sm": " m-2  h-[35px] p-2 pl-2.5 pr-3 text-sm tracking-wide rounded-[8px] font-[400]",
    "md": " h-[45px] w-[120px]  rounded-[6px] font-[400] tracking-tight text-[15px] justify-center",
    "lg": "py-4 px-6"
}

const deafultStyles = "flex items-center font-satoshi leading-none"

export const Button = (props: ButtonProps) => {

    return <button className={`${variantStyles[props.variant]} ${deafultStyles} ${sizeStyles[props.size]}`}>
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}  {props.text}  {props.endIcon}
    </button>

}

