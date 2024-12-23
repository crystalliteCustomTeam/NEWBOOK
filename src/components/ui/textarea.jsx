import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, theme, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        `flex min-h-[100px] resize-none w-full rounded-md border ${theme == "dark" ? "border-[#1F2B48]" : "border-[#D1DCE2]"} ${theme == "popup" ? "border-[#CFDCE4]" : " "} ${theme == "dark" ? "bg-transparent" : "bg-[#F2F5F7]"} ${theme == "popup" ? "bg-white" : " "} px-3 py-2 ${theme == "dark" ? "text-white" : "text-black"} ${theme == "dark" ? "placeholder:text-[#4F5458]" : "placeholder:text-[#A0B5C2]"} text-[16px] focus-visible:border-2 focus-visible:outline-none focus-within:border-pink disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
