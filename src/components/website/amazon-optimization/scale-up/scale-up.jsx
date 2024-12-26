// Components
import { CTAGroupLight } from "@/components"
import Cards from "./cards/cards"
// Css
import styles from "./scale-up.module.css"

export default function ScaleUp() {
  return (
    <div className="bg-[#F2F5F7] lg:pt-[100px] lg:pb-[40px] py-[40px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-x-5 gap-y-10">
          <div className={styles.content}>
            <h2 className={styles.title}>Not on Amazon? Let Us Link Up!</h2>
            <p className={styles.para}>
              Opening an Amazon Page for Marketing Can Be Tricky. Let our
              professionals handle the process for you in 4 simple steps:
            </p>
            <div className={styles.cta}>
              <CTAGroupLight />
            </div>
          </div>
          <Cards />
        </div>
      </div>
    </div>
  )
}
