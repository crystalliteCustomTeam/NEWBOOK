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
    const fetchedData = [
        {
          title: "Authors Unplugged",
          location: "Cedar Hill",
          imageUrl: Image1,
          category: "technology",
        },
        {
          title: "The Story Behind the Pages",
          location: "Pine Creek",
          imageUrl: Image2,
          category: "business",
        },
        {
          title: "Voices of Inspiration",
          location: "Silver Bay",
          imageUrl: Image3,
          category: "business",
        },
        {
          title: "Inside the Author’s Mind",
          location: "Maplewood",
          imageUrl: Image4,
          category: "business",
        },
        {
          title: "Beyond the Book",
          location: "Riverbend",
          imageUrl: Image5,
          category: "business",
        },
        {
          title: "Turning Words into Worlds",
          location: "Oak Valley",
          imageUrl: Image6,
          category: "business",
        },
        {
          title: "The Journey of a Storyteller",
          location: "Blue Ridge",
          imageUrl: Image7,
          category: "music",
        },
        {
          title: "Literary Lights",
          location: "Greenfield",
          imageUrl: Image8,
          category: "music",
        },
        {
          title: "In the Author's Own Words",
          location: "Redstone",
          imageUrl: Image9,
          category: "music",
        },
        {
          title: "From Draft to Bestseller",
          location: "Shadowbrook",
          imageUrl: Image1,
          category: "music",
        },
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
                  {fetchedData.map((interview, j) => (
                    tab.value === "all" || interview.category === tab.value ? (
                      <div key={j} className={styles.card}>
                        <div className={styles.__grid3}>
                          <div className={styles.img}>
                            <Image src={interview.imageUrl} alt="domain" />
                            <div>
                              <h3 className={styles.name}>{interview.title}</h3>
                              <h4 className={styles.about}>
                                Location: <span>{interview.location}</span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null
                  ))}
                </TabsContent>
              ))}
            </div>
          </Tabs>
                </div>
            </div>
        </section>
    )
}