import { SymbolIcon } from "../icons/SymbolIcon"
const defaultStyles = "text-[#e9ff92] flex ml-28 mr-28 items-center"

export const Logo = () => {

    return <div className={`${defaultStyles} pt-10 gap-2`}>
        <div>
            <SymbolIcon></SymbolIcon>
        </div>
        <div className=" font-telmaB text-4xl">
            KEYRA
        </div>
    </div>
}