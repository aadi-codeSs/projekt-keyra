import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { TextBox } from "../ui/TextBox";


export const SolPage = () => {
    return <>
    <div className="leading-[1.2] mt-16">
        <p className="text-[#e9ff92] text-[44px] font-satoshib tracking-tight"> Secret Recovery Phrase</p>
        <p className="text-[#9ca79c] text-[20px] font-satoshim tracking-tight font-[500]">Save these words in a safe place.</p>
    </div>
    <div className="flex gap-2 mt-4">
        <TextBox></TextBox>
    </div>
  
    </>
}
