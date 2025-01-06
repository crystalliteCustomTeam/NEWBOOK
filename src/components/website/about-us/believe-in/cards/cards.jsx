// Css
import styles from "./cards.module.css"

const data = [
  [
    "Stay Unique",
    "Every writer has a unique style and genre in which they excel. We believe in refining their stories to eliminate errors, perfect the flow, and keep readers hooked on every word.",
  ],
  [
    "Why Choose Book Marketing",
    "Our team of exceptionally talented individuals has a knack for blending creativity and expertise to create an impactful story.",
  ],
  [
    "Customized Writing Solution",
    "We understand that each author's journey is unique, which is why we tailor our services to meet your specific needs..",
  ],
  [
    "Innovative Measures",
    "Whether it's just an idea or a collection of thoughts on paper, our experts know how to streamline every aspect of book marketing, editing, publishing, and promotion. ",
  ],
  [
    "Supportive Community",
    "You are not alone! Our authors are success is our success. We are available for you to help solve your problem at any time of the day you need us. ",
  ],
  [
    "Passionate, Collaborative Teams",
    "Choosing us means selecting a team that is as invested in your dream as you are. Our writers, editors, and publishers work together to transform your raw idea into a well-structured book that reaches readers.",
  ],
  [
    "Strategic Market Positioning",
    "We go beyond the basics to position your book in the right markets, ensuring it reaches the audiences who will connect with it the most. Our targeted strategies are crafted to maximize your book's visibility and impact.",
  ],
  [
    "Proven Track Record",
    "Our experience speaks for itself. We’ve successfully supported numerous authors on their publishing journeys, helping them achieve their goals with effective and reliable book marketing strategies.",
  ],
]

export default function Cards() {
  return (
    <div className={styles.grids}>
      {data.map(([title, desc]) => (
        <div key={title} className={`${styles.cards} group`}>
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
