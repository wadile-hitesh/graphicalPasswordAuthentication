"use client"

import Image from "next/image";
// import { Button } from "@/components/ui/button"
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"


// interface File {
//     cid: string;
//     name: string;
// }

export default function SignUp() {
    // const [files, setFiles] = useState([])
    // const handleClick = ()=>{
    //     setNext(false)
    // }

    

    // const getImages = async ()=>{
    //     const res = await fetch("/api/getList", {
    //         method: "GET",
    //     })
    //     res.json().then((data) => {
    //         setFiles(data.files)
    //         console.log(data.files)
    //     })
        
    // }

    // const getImageUrls = async ()=>{
    //     {
    //         files.map(async (file: File )=>{
    //             const res = await fetch(`/api/getImage/${file.cid}`, {
    //                 method: "GET"
    //             })
    //             res.json().then((data) => {
    //                 console.log(data);
    //             })
    //             console.log(file.cid);
    //         })
    //     }
    // }

    // const [next,setNext] = useState(true)
    return (
        <>
        { 
            <div className="flex w-full h-screen mx-auto justify-center">
                <div className="w-1/2 h-full flex justify-center items-center">
                    <Image src={`/images/Security.png`} width={600} height={50} alt="" />
                </div>
                <div className="w-1/2 h-full flex justify-center items-center">
                    <div className="flex flex-col w-full justify-center items-center bg-white h-[100vh]">
                    <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
            
                    <div
                        className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
                        <p className="text-[32px] font-bold text-zinc-950 dark:text-white">Sign In</p>
                        <p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">Enter your email and password
                            to sign
                            in!</p>
                        
                        <div className="relative my-4">
                            <div className="relative flex items-center py-1">
                                <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                                <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                            </div>
                        </div>
                        <div>
                    <form  className="mb-4">
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <label className="text-zinc-950 dark:text-white">Email</label>
                                <input
                                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                    id="email" placeholder="name@example.com" type="email" 
                                    name="email"/>
                                
                                <label className="text-zinc-950 mt-2 dark:text-white" >Password</label>
                                <input id="password" placeholder="Password" type="password"
                                    
                                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                    name="password" />
                                </div>
                                <button
                                className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                                type="submit">Sign in</button>
                        </div>
                    </form>
                    
                    <p><a href="/dashboard/signin/signup"
                            className="font-medium text-zinc-950 dark:text-white text-sm">Don&apos;t
                            have an account? Sign up</a></p>
                                </div>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        }   
        
        </>
    )
}