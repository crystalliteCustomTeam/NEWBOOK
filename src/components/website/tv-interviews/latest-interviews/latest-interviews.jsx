// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// Css
import styles from "./latest-interviews.module.css"
// Next
import Image from "next/image";
import Link from "next/link";
// Media
import Image1 from "media/tv-interviews/interviews/1.png"
import Image2 from "media/tv-interviews/interviews/2.png"
import Image3 from "media/tv-interviews/interviews/3.png"
import Image4 from "media/tv-interviews/interviews/4.png"
import Image5 from "media/tv-interviews/interviews/5.png"
import Image6 from "media/tv-interviews/interviews/6.png"
import Image7 from "media/tv-interviews/interviews/7.png"
import Image8 from "media/tv-interviews/interviews/8.png"
import Image9 from "media/tv-interviews/interviews/9.png"
export default function LatestInterviews() {
    const tabData = [
        { value: "all" },
        { value: "technology" },
        { value: "business" },
        { value: "music" },
    ];
    return (
        <section>
            <div>
                <div className="container">
                    <Tabs defaultValue={tabData[0].value}>
                        <TabsList className={styles.tabList}>
                            <h2 className={styles.title}>Latest TV Interviews</h2>
                            <div className={styles.__grid}>
                                {tabData.map((tab, i) => (
                                    <TabsTrigger key={i} className={styles.tabTrigger} value={tab.value}>
                                        {tab.value}
                                    </TabsTrigger>
                                ))}
                            </div>
                        </TabsList>
                        <div className={styles.content}>
                            {tabData.map((tab, i) => (
                                <TabsContent key={i} value={tab.value} className={styles.__grid2}>
                                    {
                                        [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9].map((e, i) => (
                                            <div key={i} className={styles.card}>
                                                <div className={styles.__grid3}>
                                                    <div className={styles.img}>
                                                        <Image src={e} alt="domain" />
                                                        <div>
                                                            <h3 className={styles.name}>Mindscape Musings</h3>
                                                            <h4 className={styles.about}>Location: <span>Bric House</span></h4>
                                                        </div>
                                                    </div>
                                                    <Link href="/" className={styles.cta}>Open To All</Link>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}