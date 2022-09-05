import Image from "next/image";
import avatar from "./hacker.png";

const UserMenu =()=><div className ="w-12 h-12 rounded-full bg-slate-200 text-center align-middle" >
  <Image src={avatar} height={40} width={40}/>
</div>

export default UserMenu;