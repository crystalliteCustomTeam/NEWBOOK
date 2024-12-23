// Css
import styles from "./cards.module.css"

const data = [
    [
        "Customer Focus",
        "We put our clients at the center to build trust and build innovative software that exceeds expectations."
    ],
    [
        "Integrity",
        "Our teams embody integrity at all levels, serving as role models and ambassadors of our valued principles."
    ],
    [
        "Innovation",
        "We utilize the latest technologies to build what’s next and ensure rapid delivery to help you always be first to market."
    ],
    [
        "Quality",
        "From custom book marketing, we are committed to delivering excellence in everything we build for you."
    ],
    [
        "Transparency",
        "While we move your project forward, we ensure you never lose control of its outcomes by keeping you updated."
    ],
    [
        "Collaboration",
        "Our teams work, learn, succeed, grow, and develop exceptional solutions for your business – together."
    ],
    [
        "Client Value",
        "Prioritizing customer experience and accessibility, our approach is rooted in understanding our clients’ needs."
    ],
    [
        "Responsibility",
        "Committed to the well-being of our planet and future generations, we actively launch initiatives that promote responsible and sustainable growth."
    ],
]

export default function Cards() {
    return (
        <div className={styles.grids}>
            {
                data.map(([title, desc]) => (
                    <div key={title} className={`${styles.cards} group`}>
                        <h3 className={`${styles.title} group-hover:text-white`}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className={`${styles.para} group-hover:text-white`}>
                            {desc}
                        </p>
                    </div>
                ))
            }
        </div>
    )
};