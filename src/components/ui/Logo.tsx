import { SymbolIcon } from "../icons/SymbolIcon"
const defaultStyles = "text-[#e9ff92] flex items-center"

export const Logo = () => {

    return <div className={`${defaultStyles} gap-2`}>
        <div>
            <SymbolIcon></SymbolIcon>
        </div>
        <div className=" font-telmaB text-3xl">
            KEYRA
        </div>
    </div>
}