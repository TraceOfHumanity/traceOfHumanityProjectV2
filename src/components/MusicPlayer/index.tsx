import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { MdMusicNote } from "react-icons/md";
import { useDispatch } from "react-redux";

import { setIsPlaying } from "../../redux/slices/audioPlayerSlice";
import { Equalizer } from "./Equalizer";
import { useAppSelector } from "hooks/useReduxToolkit";
// import styles from "./player.module.scss";

export const MusicPlayer = () => {
  const dispatch = useDispatch();
  const isPlaying = useAppSelector((state) => state.audioPlayer.isPlaying);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playButtonRef = useRef(null);
  const songs = ["/sounds/ava.mp3", "/sounds/spore.mp3"];
  const [currentSongIndex, setCurrentSongIndex] = useState(
    Math.floor(Math.random() * songs.length),
  );

  const togglePlayPause = () => {
    dispatch(setIsPlaying(!isPlaying));
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex];
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      gsap.fromTo(
        playButtonRef.current,
        { scale: 0.6, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 5,
          repeat: -1,
          yoyo: true,
          // delay: 10,
          // repeatDelay: 5,
          ease: "elastic.out(1, 0.3)",
        },
      );
    } else {
      gsap.killTweensOf(playButtonRef.current);
      gsap.to(playButtonRef.current, { scale: 1, opacity: 1, duration: 0.5 });
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-2 right-2 z-10 bg-black bg-opacity-20 rounded-full p-0.5">
      <audio src={songs[currentSongIndex]} ref={audioRef} loop></audio>
      <div className="text-2xl flex justify-center items-center aspect-square">
        <button onClick={() => togglePlayPause()} ref={playButtonRef}>
          {/* {isPlaying ? <MdMusicOff /> : <MdMusicNote />} */}
          {isPlaying ? <Equalizer /> : <MdMusicNote />}
        </button>
      </div>
    </div>
  );
};