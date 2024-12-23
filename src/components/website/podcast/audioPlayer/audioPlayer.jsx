"use client"
import Image from "next/image"
// React
import { useState, useRef, useEffect } from "react"
// Media
import PlayIcon from "media/podcast/icons/play.png"
import PauseIcon from "media/podcast/icons/pause.png"
import NextIcon from "media/podcast/icons/next.png"
import PrevIcon from "media/podcast/icons/prev.png"
import ShuffleIcon from "media/podcast/icons/shuffle.png"
import RestartIcon from "media/podcast/icons/restart.png"
import VolumeIcon from "media/podcast/icons/volume.png"
import MutedIcon from "media/podcast/icons/no-audio.png"
// Css
import styles from "./audioPlayer.module.css"
// Components
import { Slider } from "@/components/ui/slider"
export default function AudioPlayer({
  tracks,
  shuffle = true,
  prev = true,
  next = true,
  repeat = true,
  vol = true
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef(null)
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error)
      })
    }
    setIsPlaying(true)
  }

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const nextTrack = () => {
    if (isShuffle) {
      const randomTrack = Math.floor(Math.random() * tracks.length)
      setCurrentTrack(randomTrack)
    } else {
      setCurrentTrack((prev) => (prev + 1) % tracks.length)
    }
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle)
  }

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat)
  }

  const updateProgress = () => {
    const currentTime = audioRef.current.currentTime
    const duration = audioRef.current.duration
    setProgress((currentTime / duration) * 100)
    setDuration(duration)
  }

  const handleTrackEnd = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0
      playAudio()
    } else {
      nextTrack()
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack].src
      if (isPlaying) playAudio()
      // Set volume based on mute status
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [currentTrack, isPlaying])

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? volume : 0
    }
  }
  return (
    <div className="w-full bg-white text-black">
      <audio
        ref={audioRef}
        onTimeUpdate={updateProgress}
        onEnded={handleTrackEnd}
        preload="metadata"
      />
      <div className="flex sm:flex-nowrap flex-wrap gap-y-5 items-center justify-between my-4">
        <div className="flex sm:justify-start justify-between items-center gap-5 w-full">
          {shuffle && <button
            onClick={toggleShuffle}
            className={`opacity-100 ${isShuffle && "opacity-50"}`}
          >
            <Image src={ShuffleIcon} alt="shuffleicon" />
          </button>}
          {
            prev && <button onClick={prevTrack}>
            <Image src={PrevIcon} alt="prevIcon" />
          </button>
          }
          <button
            onClick={isPlaying ? pauseAudio : playAudio}
            className="border-2 border-[#0000001A] p-2 rounded-full"
          >
            {isPlaying ? (
              <Image src={PauseIcon} alt="pause" />
            ) : (
              <Image src={PlayIcon} alt="play" />
            )}
          </button>
          {
            next && <button onClick={nextTrack}>
            <Image src={NextIcon} alt="nextIcon" />
          </button>
          }
          {
            repeat && <button
            onClick={toggleRepeat}
            className={`opacity-100 ${isRepeat && "opacity-50"}`}
          >
            <Image src={RestartIcon} alt="restarticon" />
          </button>
          }
        </div>
        {
          vol && <div className={styles.__range}>
          <label className="cursor-pointer" onClick={toggleMute}>
            {isMuted ? (
              <Image src={MutedIcon} alt="mutedicon" />
            ) : (
              <Image src={VolumeIcon} alt="volumeicon" />
            )}
          </label>
          {/* <Slider defaultValue={[0]} max={100} step={1} onChange={handleVolumeChange} /> */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
          />
        </div>
        }
      </div>
      <div className="flex items-center justify-between mb-4">
        <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
        <div className="w-full h-1 bg-[#E9E9E9] mx-2">
          <div
            className="h-1 bg-[#FF0004]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span>{formatTime(duration || 0)}</span>
      </div>
    </div>
  )
}
