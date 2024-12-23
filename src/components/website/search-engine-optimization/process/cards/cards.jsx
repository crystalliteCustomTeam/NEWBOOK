// Css
import styles from "./cards.module.css"

export default function Cards() {
    return (
        <div className={styles.root}>
            {
                [
                    ["Research Your Niche", "We start by collecting and analyzing 50-100 keyword groups. Relying on over 300 factors to come up with a traffic-generating, ROI-driven strategy."],
                    ["Create A Game Plan", "Next, we’ll craft a custom SEO roadmap for your business. Defining the exact steps we need  to take to meet your goals."],
                    ["Set Up Your Team", "Depending on your needs and objectives, we’ll put together a team of SEO experts. Each  specialized in a different area to ensure your success."],
                    ["Review And Scale", "It’s go time! Once a week, we’ll hop on a sprint call to review how things are progressing – and make any changes to your SEO plan as needed."],
                ].map(([title, desc], i) => (
                    <div key={i} className={`${styles.cards} group`}>
                        <span className={`${styles.counter} group-hover:text-white`}>{++i}</span>
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