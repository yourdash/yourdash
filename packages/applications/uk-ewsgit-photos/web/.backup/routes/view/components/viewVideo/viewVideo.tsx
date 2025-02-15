/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import tun from "@yourdash/tunnel/src/index.js";
import UKIconButton from "@yourdash/uikit/src/components/iconButton/UKIconButton.js";
import UKProgressBar from "@yourdash/uikit/src/components/progressBar/UKProgressBar.js";
import { UKIcons } from "@yourdash/uikit/src/core/iconDictionary.js";
import UKPanAndZoom from "@yourdash/uikit/src/views/panAndZoom/UKPanAndZoom.js";
import { FC, useRef, useState } from "react";
import styles from "./viewVideo.module.scss";

const ViewVideo: FC<{ mediaUrl: string }> = ({ mediaUrl }) => {
  const ref = useRef<HTMLVideoElement>(null!);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [shouldLoop, setShouldLoop] = useState(false);

  return (
    <>
      <UKPanAndZoom>
        <video
          onCanPlayThrough={() => setHasLoaded(true)}
          onPlay={() => {
            setIsPlaying(true);
          }}
          onPause={() => {
            setIsPlaying(false);
          }}
          onDurationChange={() => {
            setDuration(ref.current.duration);
          }}
          onTimeUpdate={() => {
            setCurrentTime(ref.current.currentTime);
          }}
          loop={shouldLoop}
          ref={ref}
          draggable={false}
          autoPlay={true}
          className={styles.viewVideo}
          src={tun.baseUrl + mediaUrl}
        />
      </UKPanAndZoom>
      {hasLoaded && (
        <>
          {duration > 0 && (
            <div className={styles.controls}>
              <UKIconButton
                accessibleLabel={"Rewind"}
                icon={UKIcons.ArrowLeft}
                onClick={() => {
                  ref.current.currentTime -= 2;
                }}
              />
              <UKIconButton
                accessibleLabel={"Play / Pause"}
                icon={isPlaying ? UKIcons.Stop : UKIcons.Play}
                onClick={() => {
                  isPlaying ? ref.current.pause() : ref.current.play();
                }}
              />
              <UKIconButton
                accessibleLabel={"Fast Forward"}
                icon={UKIcons.ArrowRight}
                onClick={() => {
                  ref.current.currentTime += 2;
                }}
              />
              <UKProgressBar value={currentTime / duration} />
              <UKIconButton
                accessibleLabel={"Loop"}
                icon={shouldLoop ? UKIcons.CrossReference : UKIcons.FeedMerged}
                onClick={() => {
                  setShouldLoop(!shouldLoop);
                }}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ViewVideo;
