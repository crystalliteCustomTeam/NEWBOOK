"use client"
import Link from "next/link"
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

export default function Header() {
    const [isMobile, setIsMobile] = useState(false)
    const [isMouseHover, setMouseHover] = useState(false)
    const ref = useRef(null)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        const mouseEnterHandle = () => {
            setMouseHover(true)
            ref.current.classList.add("backdrop-blur-3xl", "bg-white/95", "border-b-4", "border-black")
        }

        const header = ref.current

        if (header && (window.innerWidth >= 1200)) {
            header.addEventListener('mouseenter', mouseEnterHandle)
        }

        return () => {
            if (header) {
                header.removeEventListener('mouseenter', mouseEnterHandle)
            }
        }
    }, [])

    useEffect(() => {
        const mouseLeaveHandle = () => {
            setMouseHover(false)
            ref.current.classList.remove("backdrop-blur-3xl", "bg-white/95", "border-b-4", "border-black")
        }

        const header = ref.current

        if (header && (window.innerWidth >= 1200)) {
            header.addEventListener('mouseleave', mouseLeaveHandle)
        }

        return () => {
            if (header) {
                header.removeEventListener('mouseleave', mouseLeaveHandle)
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
                                    <svg width="118" height="37" viewBox="0 0 118 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.2569 21.5917C23.0617 27.6155 18.1953 32.5506 12.1769 32.8228C9.33135 32.952 6.69745 32.0585 4.61344 30.4804C1.80908 28.3579 0 24.9926 0 21.2068V0.229095H4.61344V21.2205C4.61344 23.8956 6.0706 26.3976 8.4653 27.5908C9.57879 28.1434 10.8572 28.4156 12.2072 28.3084C15.6686 28.0362 18.4647 25.2428 18.7369 21.7814C18.9981 18.4766 16.9993 15.598 14.1207 14.523V21.1078C14.1207 22.4137 13.1007 23.5327 11.7948 23.5547C10.4668 23.5795 9.38083 22.51 9.38083 21.1848V9.79414C10.1094 9.65117 10.8627 9.57419 11.6326 9.57419C12.4849 9.57419 13.3179 9.66767 14.1207 9.84363C19.471 11.0066 23.4438 15.8537 23.2596 21.5944L23.2569 21.5917Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M37.6746 3.94075V30.3072C37.6746 31.7038 36.5418 32.8366 35.1424 32.8366C33.743 32.8366 32.6102 31.7038 32.6102 30.3072V8.82087C32.2253 8.83737 31.8459 8.87861 31.472 8.9391V14.3416L29.3357 11.4053L27.1995 14.3416V10.4348C24.8103 11.727 23.2624 13.3188 23.2624 13.3188C17.354 6.94581 9.34509 8.54869 9.34509 8.54869V3.70705C17.7582 2.80801 23.3971 7.31147 23.3971 7.31147C26.7953 4.55936 30.9084 4.04523 32.6102 3.9545C32.8027 3.94625 32.9621 3.9435 33.0886 3.94075H37.6746Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M48.6692 20.0355H41.9196V4.38336H48.3778C51.6523 4.38336 53.4669 6.08797 53.4669 8.41943C53.4669 10.3247 52.3232 11.5152 50.7973 12.0074C52.5678 12.3208 53.8243 13.9594 53.8243 15.796C53.8243 18.2842 51.919 20.0328 48.6665 20.0328L48.6692 20.0355ZM47.9297 6.91828H45.0593V10.8416H47.9297C49.4088 10.8416 50.2611 10.168 50.2611 8.88957C50.2611 7.61112 49.4088 6.91553 47.9297 6.91553V6.91828ZM48.1551 13.2638H45.0593V17.4786H48.2211C49.747 17.4786 50.6433 16.739 50.6433 15.4166C50.6433 14.0941 49.6783 13.2638 48.1551 13.2638Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M61.8553 20.239C58.2673 20.239 55.5537 17.726 55.5537 13.8247C55.5537 9.92333 58.3553 7.41316 61.9432 7.41316C65.5312 7.41316 68.3328 9.90134 68.3328 13.8247C68.3328 17.748 65.4624 20.239 61.8525 20.239H61.8553ZM61.8553 17.5033C63.5159 17.5033 65.1078 16.2936 65.1078 13.8247C65.1078 11.3558 63.5599 10.1488 61.902 10.1488C60.2441 10.1488 58.7402 11.3365 58.7402 13.8247C58.7402 16.3129 60.1754 17.5033 61.858 17.5033H61.8553Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M76.1629 20.239C72.5749 20.239 69.8613 17.726 69.8613 13.8247C69.8613 9.92333 72.6629 7.41316 76.2509 7.41316C79.8388 7.41316 82.6404 9.90134 82.6404 13.8247C82.6404 17.748 79.77 20.239 76.1601 20.239H76.1629ZM76.1629 17.5033C77.8235 17.5033 79.4154 16.2936 79.4154 13.8247C79.4154 11.3558 77.8675 10.1488 76.2096 10.1488C74.5517 10.1488 73.0478 11.3365 73.0478 13.8247C73.0478 16.3129 74.483 17.5033 76.1656 17.5033H76.1629Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M84.9526 3.44308H88.0924V12.8844L92.2632 7.61387H96.3433L90.872 13.8467L96.3872 20.0355H92.3072L88.0924 14.743V20.0355H84.9526V3.44308Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M53.0847 21.5751V32.5039H51.6468V24.3548L48.0148 32.5039H47.0031L43.3547 24.3383V32.5039H41.9167V21.5751H43.4646L47.509 30.6096L51.5533 21.5751H53.0847Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M55.5179 25.8174C55.8754 25.1493 56.3675 24.6297 56.9943 24.2613C57.6212 23.8929 58.3195 23.7087 59.0866 23.7087C59.8537 23.7087 60.5025 23.8709 61.0607 24.1981C61.6188 24.5252 62.0339 24.9349 62.3089 25.4298V23.8489H63.7633V32.5039H62.3089V30.8928C62.0229 31.3986 61.5995 31.8165 61.0359 32.1492C60.4723 32.4819 59.8179 32.6469 59.0701 32.6469C58.3223 32.6469 57.6075 32.4571 56.9861 32.0777C56.3647 31.6983 55.8754 31.1677 55.5179 30.4831C55.1605 29.7985 54.9818 29.0204 54.9818 28.1461C54.9818 27.2718 55.1605 26.4855 55.5179 25.8174ZM61.9157 26.458C61.6518 25.9741 61.2971 25.603 60.849 25.3445C60.4008 25.0861 59.9087 24.9569 59.3725 24.9569C58.8364 24.9569 58.347 25.0833 57.9044 25.3363C57.4617 25.5892 57.1098 25.9576 56.8459 26.4415C56.5819 26.9254 56.45 27.4945 56.45 28.1461C56.45 28.7977 56.5819 29.3861 56.8459 29.8755C57.1098 30.3649 57.4617 30.7388 57.9044 30.9972C58.347 31.2557 58.8364 31.3849 59.3725 31.3849C59.9087 31.3849 60.4008 31.2557 60.849 30.9972C61.2971 30.7388 61.6518 30.3649 61.9157 29.8755C62.1797 29.3861 62.3116 28.8142 62.3116 28.1626C62.3116 27.511 62.1797 26.9419 61.9157 26.4553V26.458Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M68.7149 24.1046C69.1823 23.8296 69.7542 23.6949 70.4278 23.6949V25.1796H70.0483C68.4372 25.1796 67.6316 26.0539 67.6316 27.8025V32.5094H66.1937V23.8544H67.6316V25.2593C67.8846 24.7644 68.2448 24.3795 68.7121 24.1073L68.7149 24.1046Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M76.919 32.5066L73.5235 28.685V32.5066H72.0856V20.8191H73.5235V27.6897L76.8557 23.8516H78.8628L74.7882 28.1626L78.8793 32.5066H76.9217H76.919Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M88.0703 28.7152H81.1529C81.2052 29.5675 81.4966 30.2329 82.03 30.714C82.5606 31.1924 83.2067 31.4316 83.9655 31.4316C84.5869 31.4316 85.1037 31.2859 85.5217 30.9972C85.9368 30.7085 86.231 30.3209 86.3987 29.837H87.9466C87.7156 30.6673 87.251 31.3436 86.5554 31.866C85.8598 32.3884 84.9965 32.6468 83.9655 32.6468C83.1435 32.6468 82.4094 32.4626 81.7633 32.0942C81.1172 31.7258 80.6085 31.2007 80.2401 30.5216C79.8717 29.8425 79.6875 29.0562 79.6875 28.1599C79.6875 27.2636 79.8662 26.48 80.2236 25.8064C80.581 25.1328 81.0842 24.6132 81.733 24.2503C82.3791 23.8874 83.1242 23.7059 83.9683 23.7059C84.8123 23.7059 85.5162 23.8846 86.1485 24.242C86.7809 24.5994 87.2675 25.0916 87.6084 25.7184C87.9493 26.3453 88.1226 27.0519 88.1226 27.8437C88.1226 28.1186 88.1061 28.4073 88.0758 28.7125L88.0703 28.7152ZM86.2695 26.1336C86.0275 25.7377 85.6976 25.438 85.2825 25.2345C84.8673 25.0283 84.4054 24.9266 83.8995 24.9266C83.1737 24.9266 82.5551 25.1576 82.0437 25.6222C81.5323 26.0869 81.2409 26.7275 81.1667 27.5495H86.6324C86.6324 27.0024 86.5114 26.5295 86.2695 26.1363V26.1336Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M91.7655 25.0338V30.1339C91.7655 30.5546 91.8535 30.8515 92.035 31.0275C92.2137 31.2007 92.5244 31.2887 92.967 31.2887H94.0255V32.5039H92.7306C91.9305 32.5039 91.3311 32.3197 90.9297 31.9513C90.5283 31.5828 90.3304 30.978 90.3304 30.1339V25.0338H89.2086V23.8489H90.3304V21.6686H91.7683V23.8489H94.0255V25.0338H91.7683H91.7655Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M95.8071 22.1608C95.6174 21.9711 95.5239 21.7401 95.5239 21.4652C95.5239 21.1902 95.6174 20.9593 95.8071 20.7696C95.9968 20.5799 96.2278 20.4864 96.5027 20.4864C96.7776 20.4864 96.9893 20.5799 97.1735 20.7696C97.3578 20.9593 97.4512 21.1902 97.4512 21.4652C97.4512 21.7401 97.3578 21.9711 97.1735 22.1608C96.9893 22.3505 96.7666 22.444 96.5027 22.444C96.2388 22.444 95.9968 22.3505 95.8071 22.1608ZM97.1955 23.8516V32.5066H95.7576V23.8516H97.1955Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M106.422 24.6489C107.074 25.2868 107.401 26.2051 107.401 27.4038V32.5039H105.98V27.6073C105.98 26.744 105.763 26.0841 105.334 25.625C104.902 25.1658 104.311 24.9376 103.566 24.9376C102.821 24.9376 102.205 25.1741 101.757 25.6497C101.309 26.1253 101.086 26.8127 101.086 27.7172V32.5039H99.6479V23.8489H101.086V25.0806C101.369 24.6379 101.757 24.297 102.246 24.0551C102.735 23.8131 103.274 23.6922 103.865 23.6922C104.918 23.6922 105.771 24.0111 106.425 24.6489H106.422Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                        <path d="M115.289 24.198C115.853 24.5252 116.271 24.9349 116.546 25.4298V23.8489H118V32.6936C118 33.4827 117.832 34.1865 117.494 34.8024C117.156 35.4182 116.675 35.8993 116.048 36.2485C115.421 36.5949 114.692 36.7709 113.859 36.7709C112.721 36.7709 111.775 36.5015 111.017 35.9653C110.258 35.4292 109.81 34.6979 109.675 33.7713H111.096C111.253 34.2965 111.58 34.7226 112.075 35.0415C112.57 35.3632 113.164 35.5227 113.859 35.5227C114.649 35.5227 115.295 35.2752 115.795 34.7804C116.295 34.2855 116.546 33.5899 116.546 32.6963V30.879C116.262 31.3849 115.839 31.8055 115.281 32.1437C114.723 32.4819 114.071 32.6496 113.323 32.6496C112.575 32.6496 111.858 32.4599 111.231 32.0805C110.604 31.7011 110.112 31.1704 109.755 30.4858C109.397 29.8013 109.219 29.0232 109.219 28.1489C109.219 27.2746 109.397 26.4883 109.755 25.8202C110.112 25.1521 110.604 24.6324 111.231 24.264C111.858 23.8956 112.553 23.7114 113.323 23.7114C114.093 23.7114 114.725 23.8736 115.289 24.2008V24.198ZM116.15 26.4553C115.886 25.9714 115.531 25.6002 115.083 25.3418C114.635 25.0833 114.143 24.9541 113.606 24.9541C113.07 24.9541 112.581 25.0806 112.138 25.3335C111.696 25.5865 111.344 25.9549 111.08 26.4388C110.816 26.9227 110.684 27.4918 110.684 28.1434C110.684 28.795 110.816 29.3834 111.08 29.8727C111.344 30.3621 111.696 30.736 112.138 30.9945C112.581 31.2529 113.07 31.3821 113.606 31.3821C114.143 31.3821 114.635 31.2529 115.083 30.9945C115.531 30.736 115.886 30.3621 116.15 29.8727C116.414 29.3834 116.546 28.8115 116.546 28.1599C116.546 27.5083 116.414 26.9392 116.15 26.4525V26.4553Z" fill={`${isMouseHover ? "black" : "white"}`} />
                                    </svg>
                                </Link>
                                {!isMobile ?
                                    <div className={`${style.navlist} ${isMouseHover ? " " : "text-white"}`}>
                                        <Navlist />
                                    </div>
                                    :
                                    <div className={style.mobileNav}>
                                        <MobileNav />
                                    </div>
                                }
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