"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  import React from 'react'
import { Button } from "../ui/button"
import Image from "next/image"
  
  const LoginModal = () => {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button>Getting Start</Button>
            </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">Welcome to Quick Chat</DialogTitle>
            <DialogDescription>
             QuickChat makes it effortless to create secure chat links and start conversations with seconds.
            </DialogDescription>
          </DialogHeader>

          <Button variant="outline">
            <Image src='/client/public/image/google.png'
            className="mr-4"
            width={25}
            height={25}
            alt="Google Logo"
            >
           Continue with Google
            </Image>
          </Button>
          
        </DialogContent>
      </Dialog>
      
    )
  }
  
  export default LoginModal