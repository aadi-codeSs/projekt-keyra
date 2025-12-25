const defaultStyles = "text-[#e9ff92] flex items-center border-t pt-6 pb-6 pl-6"

export const Footer = () => {
    return <div className={`${defaultStyles}`}>
        <hr className=""/>
        <div className="tracking-tight font-satoshi flex gap-1 text-[17]">
            <div>
                Designed and Developed by 
            </div>
            <div className="font-[600]">
                Aditya
            </div>
        </div>
    </div>
}