import { cn } from "../../lib/utils"

export const TextBox = () => {
    return <>
    <input type="type" className= {cn("flex h-10 w-full border-[#9ca79c] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-[#e9ff92] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9ff92] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50")} />
    </>
}