// Css
import style from "./cards.module.css"

const data = [
    {
        title: "Layout Design",
        para: "Create visually appealing magazine layouts with QuarkXPress at ease manipulate images, adjust sizes, apply effects, and position. Use powerful graphic and illustrations tools to produce a stunning magazine."
    },
    {
        title: "Interactive Elements",
        para: "QuarkXPress allows you to add interactive elements to your magazine such as hyperlinks, videos, audio clips, slideshows, and buttons. Use interactive features to develop the reader’s experience and engagement with your content. "
    },
    {
        title: "Text Effects",
        para: "In QuarkXPress use a variety of text effects and enhancements such as text wraps, outlines and drop shadows options. With the help of these features, produce text in such a way that helps to create dynamic layouts in your magazines."
    },
    {
        title: "Stock Images",
        para: "Stock Images palette allows users to use high resolution royalty-free images from Unsplash, and Pexels. Add these images to your magazine layout within the QuarkXPress application by dragging and dropping them in to your project."
    },
    {
        title: "Adaptive Layouts",
        para: "Use adaptable layouts within QuarkXPress to ensure your magazine content is readable and accessible across various devices, including desktop computers, tablets, and smartphones."
    },
    {
        title: "Digital Output",
        para: "Once your magazine layout is complete, you can export it in various digital formats in QuarkXPress like ePub, HTML5, PDF and many more. Each format has its own advantages, so choose the one that best suits your distribution needs.  "
    }
]

export default function Cards() {
    return (
        <div className={style.root}>
            {
                data.map(({ title, para }, i) => (
                    <div key={i} className={`${style.cards} group`}>
                        <h3 className={`${style.title} group-hover:text-white`}>
                            {title}
                        </h3>
                        <p className={`${style.para} group-hover:text-white`}>
                            {para}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}