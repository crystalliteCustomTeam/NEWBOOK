import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, theme, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        `flex h-[50px] w-full rounded-lg border focus-visible:border-2 ${theme == "dark" ? "border-[#1F2B48]" : "border-[#D1DCE2]"} ${theme == "popup" ? "border-[#CFDCE4]" : " "} ${theme == "dark" ? "bg-transparent" : "bg-[#F2F5F7]"} ${theme == "popup" ? "bg-white" : " "} px-3 py-1 text-[16px] transition-colors file:border-0 file:bg-transparent file:text-[16px]  ${theme == "dark" ? "text-white" : "text-black"} ${theme == "dark" ? "placeholder:text-[#4F5458]" : "placeholder:text-[#A0B5C2]"} focus-visible:outline-none focus-visible:border-pink disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
