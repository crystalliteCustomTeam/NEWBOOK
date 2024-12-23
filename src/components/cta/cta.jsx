export default function CTA({
    text = "Get Started",
    link = "javascript:;",
    icon = "chat",
    css = "bg-gradient"
}) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<a href='${link}' class='inline-flex items-center text-sm md:text-base leading-none w-max px-3 md:px-0 h-[40px] md:w-[200px] md:h-[50px] rounded-xl ${css} justify-center gap-2 uppercase transition-all duration-300'>
                    ${icon === "chat" ?
                        `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/chat.png" width="16" height="16" />` :
                        ``}
                    ${icon === "chat-pink" ?
                        `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/chat-pink.png" width="17" height="17" />` :
                        ``}
                    ${icon === "call" ?
                        `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/call-pink.png" width="17" height="16" />` :
                        ``}
                    ${icon === "call-pink" ?
                        `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/call-pink.png" width="17" height="16" />` :
                        ``}
                    <span>${text}</span>
                    ${icon === "chevron-white" ?
                        `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/right-chevron.png" />` :
                        ``}
                    ${icon === "chevron-pink" ?
                        `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/chevron-up.png" />` :
                        ``}
                </a>`
            }}
        />
    )
}
