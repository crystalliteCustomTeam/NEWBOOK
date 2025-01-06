"use client"
// React
import { useState, useRef } from "react"
// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// Css
import styles from "./latest-podcast.module.css"
// Next
import Image from "next/image"
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
import PlayIcon from "media/podcast/icons/play.png"
import PauseIcon from "media/podcast/icons/pause.png"

export default function LatestInterviews() {
  const [isPlaying, setIsPlaying] = useState(null) // Track which audio is playing
  const [progress, setProgress] = useState({}) // Track progress per audio
  const audioRefs = useRef([]) // Array to hold refs for each audio

  const tracks = [
    {
      src: "/podcast/audios/1.mp3",
      img: Image1,
      name: "The Writer's Journey",
      about: "Episode 1: Embracing the Author’s Path",
    },
    {
      src: "/podcast/audios/2.mp3",
      img: Image2,
      name: "The Creative Edge",
      about: "Episode 1: Pushing Boundaries in Storytelling",
    },
    {
      src: "/podcast/audios/3.mp3",
      img: Image3,
      name: "Beyond Borders",
      about: "Episode 1: Exploring Cultures Through Literature",
    },
    {
      src: "/podcast/audios/4.mp3",
      img: Image4,
      name: "Wellness Waves",
      about: "Episode 1: Mindfulness for the Modern Writer",
    },
    {
      src: "/podcast/audios/5.mp3",
      img: Image5,
      name: "Tech Talk for Authors",
      about: "Episode 1: Digital Tools for Better Writing",
    },
    {
      src: "/podcast/audios/1.mp3",
      img: Image6,
      name: "Infinite Horizons",
      about: "Episode 1: Imagining the Future in Fiction",
    },
    {
      src: "/podcast/audios/2.mp3",
      img: Image7,
      name: "Human Chronicles",
      about: "Episode 1: Stories That Define Us",
    },
    {
      src: "/podcast/audios/3.mp3",
      img: Image8,
      name: "Nature’s Symphony",
      about: "Episode 1: Finding Inspiration in the Outdoors",
    },
    {
      src: "/podcast/audios/4.mp3",
      img: Image9,
      name: "Game Changers",
      about: "Episode 1: Authors Who Break the Mold",
    },
  ]

  const playAudio = (index) => {
    // Pause other audio instances
    audioRefs.current.forEach((audio, i) => {
      if (i !== index && audio) audio.pause()
    })
    // Play selected audio
    audioRefs.current[index].play()
    setIsPlaying(index)
  }

  const pauseAudio = (index) => {
    audioRefs.current[index].pause()
    setIsPlaying(null)
  }

  const updateProgress = (index) => {
    const currentAudio = audioRefs.current[index]
    if (currentAudio) {
      setProgress((prev) => ({
        ...prev,
        [index]: (currentAudio.currentTime / currentAudio.duration) * 100,
      }))
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const tabData = [
    { value: "all" },
    { value: "technology" },
    { value: "business" },
    { value: "music" },
  ]

  return (
    <section>
      <div className="container">
        <Tabs defaultValue={tabData[0].value}>
          <TabsList className={styles.tabList}>
            <h2 className={styles.title}>Explore Latest Podcast</h2>
            <div className={styles.__grid}>
              {tabData.map((tab, i) => (
                <TabsTrigger
                  key={i}
                  className={styles.tabTrigger}
                  value={tab.value}
                >
                  {tab.value}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          <div className={styles.content}>
            {tabData.map((tab, i) => (
              <TabsContent key={i} value={tab.value} className={styles.__grid2}>
                {tracks.map(({ img, src, name, about }, i) => (
                  <div key={i} className={styles.card}>
                    <div className={styles.__grid3}>
                      <div className={styles.img}>
                        <Image
                          src={img}
                          alt="podcast thumbnail"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className={styles.name}>{name}</h3>
                        <h4 className={styles.about}>{about}</h4>
                        <audio
                          ref={(el) => (audioRefs.current[i] = el)}
                          src={src}
                          onTimeUpdate={() => updateProgress(i)}
                          preload="metadata"
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-[13px] font-manrope font-semibold text-black">
                            {formatTime(audioRefs.current[i]?.currentTime || 0)}
                          </span>
                          <div className="w-full h-1 bg-[#E9E9E9] mx-2">
                            <div
                              className="h-1 bg-[#FF0004]"
                              style={{ width: `${progress[i] || 0}%` }}
                            ></div>
                          </div>
                          <span className="text-[13px] font-manrope font-semibold text-black">
                            {formatTime(audioRefs.current[i]?.duration || 0)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          isPlaying === i ? pauseAudio(i) : playAudio(i)
                        }
                        className="border-2 border-[#0000001A] p-2 rounded-full"
                      >
                        {isPlaying === i ? (
                          <Image src={PauseIcon} alt="pause" />
                        ) : (
                          <Image src={PlayIcon} alt="play" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
