"use client"
// Next
import Link from "next/link"
import Image from "next/image"
// Components
import Navlist from "./navlist/navlist"
import MobileNav from "./mobilenav/mobilenav"
import { CTA } from "@/components"
// React
import { useEffect, useRef, useState } from "react"
// Shadcnui
import { NavigationMenu } from "@/components/shadcnui"
// Css
import style from "./header.module.css"
// Media
import Logo from "media/logo.svg"

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMouseHover, setMouseHover] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const mouseEnterHandle = () => {
      setMouseHover(true)
      ref.current.classList.add(
        "backdrop-blur-3xl",
        "bg-black/95",
      )
    }

    const header = ref.current

    if (header && window.innerWidth >= 1200) {
      header.addEventListener("mouseenter", mouseEnterHandle)
    }

    return () => {
      if (header) {
        header.removeEventListener("mouseenter", mouseEnterHandle)
      }
    }
  }, [])

  useEffect(() => {
    const mouseLeaveHandle = () => {
      setMouseHover(false)
      ref.current.classList.remove(
        "backdrop-blur-3xl",
        "bg-black/95",
      )
    }

    const header = ref.current

    if (header && window.innerWidth >= 1200) {
      header.addEventListener("mouseleave", mouseLeaveHandle)
    }

    return () => {
      if (header) {
        header.removeEventListener("mouseleave", mouseLeaveHandle)
      }
    }
  }, [])
  return (
    <header>
      <div ref={ref} className={style.root}>
        <div className="relative">
          <NavigationMenu className={style.navbar}>
            <div className="container">
              <div className={style.row}>
                <Link href="/" className={style.logo}>
                <Image src={Logo} alt="logo" width={220} height={50}/>
                </Link>
                {!isMobile ? (
                  <div className={style.navlist}>
                    <Navlist />
                  </div>
                ) : (
                  <div className={style.mobileNav}>
                    <MobileNav />
                  </div>
                )}
                <div className={style.cta}>
                  <CTA css="hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none" />
                </div>
              </div>
            </div>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}
