import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { ShoppingCart,Search } from 'lucide-react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { DropdownMenu } from '../ui/dropdown-menu';
import { DropdownMenuDemo } from '../ui/avatarDisplay';
import { SearchFeature } from '../ui/SearchFeature';


interface navArray{
    label:string,
    href:string
}
const navArray: navArray[] =[{
    label:"Female",
    href:"/female"
},
{
label:"Male",
href:"/male"
},
{
    label:"Products",
    href:"/products"
    },
    {
      label:"Kids",
      href:"/kids"
      },
]
function Navbar() {
  const {getUser}=getKindeServerSession();
  const user=getUser();
  
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={"/"} className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span className="ml-3 text-xl">LOGO</span>
    </Link >
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
     {
        navArray.map((items,i)=>(
            <div key={i}>
            <Link href={items.href} className="cursor-pointer mr-5 hover:text-gray-900">{items.label}</Link></div>

        ))
     }
     
    
    </nav>
    <div className='flex items-center space-x-4'>
        
        <SearchFeature/>
        <ShoppingCart size={18}/>
    {!user ?(<div><LoginLink className={buttonVariants({
        variant:"outline",
        size:'sm'
    })}>Sign in</LoginLink>
   
    <RegisterLink className={buttonVariants({
        variant:"secondary",
        size:'sm'
    })}>Sign up</RegisterLink></div>):(
      <DropdownMenuDemo UserData={user}/>
     
    )}
    </div>
  </div>
</header>

  )
}

export default Navbar