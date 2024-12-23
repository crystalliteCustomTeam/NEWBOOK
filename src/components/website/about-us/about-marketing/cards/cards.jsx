// Css
import styles from "./cards.module.css"

const data = [
    ["Mission", "We believe that book marketing an ever-expanding horizon of possibilities. But to make the most of those opportunities, businesses require the skills and guidance of an expert. At Book Marketing, we empower businesses through technology."],
    ["Vision", "The promise of Book Marketing is limitless. We believe that through strategic applications of meaningful technology, we can build a future that is smarter, faster, simpler. In other words, better. We are Builders of Better."],
    ["Values", "Our values shape the way we work with our clients, delivering outstanding Book Marketing supported by cutting-edge technologies."],
    ["Our Story", "Book Marketing came into existence after two tech enthusiasts from different backgrounds joined forces to create something bound to become a difference-maker in the digital world."],
]

export default function Cards() {
    return (
        <div className={styles.root}>
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
}