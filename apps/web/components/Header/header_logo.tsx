import React from "react"
import Image from 'next/image'
// import logo from "./logo-green.jpg";
import logo from "./logo.png";

const HeaderLogo = () =>    
        <Image src={logo} height={44} width={44}  layout="fixed" className="rounded-full" alt="logo"/>
    



export default HeaderLogo;    