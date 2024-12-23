"use client"
// Shadcnui
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/shadcnui"
// Radix
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
// Components
import { FrontEndForm } from "@/components"
// Css
import style from "./popup.module.css"
// Media
import Book from "media/popup-book.png"
// Next
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Popup() {
    return (
        <Dialog defaultOpen={true}>
            <DialogTrigger asChild>
                Open Now
            </DialogTrigger>
            <DialogContent className="p-[25px] 2xl:p-[50px] rounded-[40px]">
                <VisuallyHidden.Root>
                    <DialogHeader>
                        <VisuallyHidden.Root>
                            <DialogTitle></DialogTitle>
                        </VisuallyHidden.Root>
                        <VisuallyHidden.Root>
                            <DialogDescription></DialogDescription>
                        </VisuallyHidden.Root>
                    </DialogHeader>
                </VisuallyHidden.Root>
                <div className={style.root}>
                    <div>
                        <h2 className={style.title}>We would love to hear from you!</h2>
                        <p className={style.para}>We are known for our writing skills that help you attract multiple readers. Our professional e-book writers create magic with the words. Take a look:</p>
                        <FrontEndForm label={false} theme="popup" />
                    </div>
                    <Image src={Book} alt="domain" className={style.__img} />
                </div>
            </DialogContent>
        </Dialog>
    )
}