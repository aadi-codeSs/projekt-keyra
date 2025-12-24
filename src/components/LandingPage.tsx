import { Link } from "react-router-dom";
import { Button } from "./ui/Button";


export const LandingPage = () => {
    return <>
    <div className="leading-[1.2] mt-16">
    <p className="text-[#e9ff92] text-[44px] font-satoshib tracking-tight"><span className="font-telmaB">Keyra</span> supports multiple blockchains</p>
    <p className="text-[#9ca79c] text-[20px] font-satoshim tracking-tight font-[500]">Choose a blockchain to get started.</p>
    </div>
    <div className="flex gap-2 mt-4">
    <Link to="solana"> <Button variant="secondary" size="md" text="Solana" ></Button> </Link>
            
 
        
        <Button variant="secondary" size="md" text="Etherium"></Button>
    
    </div>
  
    </>
}

