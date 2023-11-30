import React from "react";
import styles from "./player.module.scss";

export const Equalizer = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      width={25}
      height={25}
      x="0px"
      y="0px"
      className={styles.musicNote}
      viewBox="0 0 100 100"
      // enable-background="new 0 0 100 100"
    >
      <rect
        fill="#fff"
        width="3"
        height="10"
        transform="translate(0) rotate(180 3 50)"
      >
        <animate
          attributeName="height"
          attributeType="XML"
          dur="1s"
          values="30; 100; 30"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="17"
        fill="#fff"
        width="3"
        height="10"
        transform="translate(0) rotate(180 20 50)"
      >
        <animate
          attributeName="height"
          attributeType="XML"
          dur="1s"
          values="30; 100; 30"
          repeatCount="indefinite"
          begin="0.1s"
        />
      </rect>
      <rect
        x="40"
        fill="#fff"
        width="3"
        height="10"
        transform="translate(0) rotate(180 40 50)"
      >
        <animate
          attributeName="height"
          attributeType="XML"
          dur="1s"
          values="30; 100; 30"
          repeatCount="indefinite"
          begin="0.3s"
        />
      </rect>
      <rect
        x="60"
        fill="#fff"
        width="3"
        height="10"
        transform="translate(0) rotate(180 58 50)"
      >
        <animate
          attributeName="height"
          attributeType="XML"
          dur="1s"
          values="30; 100; 30"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </rect>
      <rect
        x="80"
        fill="#fff"
        width="3"
        height="10"
        transform="translate(0) rotate(180 76 50)"
      >
        <animate
          attributeName="height"
          attributeType="XML"
          dur="1s"
          values="30; 100; 30"
          repeatCount="indefinite"
          begin="0.1s"
        />
      </rect>
    </svg>
  );
};
