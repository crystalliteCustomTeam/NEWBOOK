// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/amazon-optimization/icons/7.png"
import Two from "media/amazon-optimization/icons/8.png"
import Three from "media/amazon-optimization/icons/9.png"
import Four from "media/amazon-optimization/icons/10.png"

const data = [
  {
    img: One,
    title: "Inventory",
    para: "Let us help with creating an inventory for you so you are certain of the products you wish to have on your Amazon Store.",
  },
  {
    img: Two,
    title: "Account",
    para: "Our consultants will not just open an Amazon seller’s account for you, but guide which is best suited to your needs, and have it linked to your bank account.",
  },
  {
    img: Three,
    title: "Catalogue",
    para: "It’s time to put your products in a neat cataologue on Amazon, so shoppers have a seamless experience at your store.",
  },
  {
    img: Four,
    title: "Live",
    para: "With the hardwork out of the way, it is time to go live!",
  },
]

export default function Cards() {
  return (
    <div className={style.root}>
      {data.map(({ img, title, para }, i) => (
        <div key={i} className={`${style.cards} group`}>
          <Image
            src={img}
            alt="domain"
            className="group-hover:brightness-0 group-hover:invert"
          />
          <h3 className={`${style.title} group-hover:text-white`}>{title}</h3>
          <p className={`${style.para} group-hover:text-white`}>{para}</p>
        </div>
      ))}
    </div>
  )
}
