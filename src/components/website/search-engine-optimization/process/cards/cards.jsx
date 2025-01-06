// Css
import styles from "./cards.module.css"

export default function Cards() {
  return (
    <div className={styles.root}>
      {[
        [
          "Increased Traffic",
          "Attract visitors to your site, leading to higher engagement and conversions.",
        ],
        [
          "Brand Credibility",
          "Improve trustworthiness through high search rankings.",
        ],
        [
          "Enhanced User Experience",
          "A well-optimized site keeps visitors engaged, reducing bounce rates.",
        ],
        [
          "Performance Tracking",
          "Regular reports on traffic, keyword rankings, and conversions to measure impact.",
        ],
      ].map(([title, desc], i) => (
        <div key={i} className={`${styles.cards} group`}>
          <span className={`${styles.counter} group-hover:text-white`}>
            {++i}
          </span>
          <h3
            className={`${styles.title} group-hover:text-white`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className={`${styles.para} group-hover:text-white`}>{desc}</p>
        </div>
      ))}
    </div>
  )
}
