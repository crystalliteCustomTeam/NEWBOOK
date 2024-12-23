// Next
import { DM_Serif_Display as FontMono, Manrope } from "next/font/google"
import localFont from "next/font/local"

const fontSans = localFont({
    src: [{
        path: "./fonts/Satoshi-Variable.ttf",
        weight: "400",
        style: "normal",
    }],
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
    fallback: ["system-ui", "arial"]
})

const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: "400",
    style: ["normal"],
    display: "swap",
    fallback: ["system-ui", "arial"]
})

const fontManrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    weight: ["300", "400", "500", "600", "700","800"],
    style: ["normal"],
    display: "swap",
    fallback: ["system-ui", "arial"]
})

export { fontSans, fontMono, fontManrope }