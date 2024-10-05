import Link from "next/link";

export default function Navbar(){
    
    return (
        <div className="md:p-6 py-2 px-4 flex justify-between">
            <div className="flex items-center cursor-pointer">
                <img className="" width="24px" src="https://img.icons8.com/material-rounded/48/A259FF/cyber-security.png" alt=""/>
                <p className="md:text-xl text-white ml-2 font-['Space_Mono']">Graphical Password Auth</p>
            </div>

            <div className="font-['Work_Sans'] text-white hidden md:flex items-center">
                <p className={`hover:text-gray-300 text-xl cursor-pointer `} >Home</p>
                {/*<p className={`text-xl ml-12 ${props.currentPage === Page.ABOUT ? additionalClasses : ""}`}>About Us</p>*/}
                <p className={`hover:text-gray-300 cursor-pointer text-xl ml-12 mr-20`} >Contact</p>

                <div className="space-x-2">
                    <Link href="/login" className="transition duration-500 ease-in-out bg-[#A259FF] rounded-lg px-4 py-1 border-[#A259FF] border-2 hover:bg-transparent">Login</Link>
                    <Link href="/signup" className="transition duration-500 ease-in-out bg-[#A259FF] rounded-lg px-4 py-1 border-[#A259FF] border-2 hover:bg-transparent">Sign Up</Link>
                </div>

                
            </div>

            <div className="md:hidden">
                <img  className="ml-2" width="32px" src="https://img.icons8.com/fluency-systems-regular/48/A259FF/menu--v1.png" alt=""/>
            </div>
        </div>
    )
}