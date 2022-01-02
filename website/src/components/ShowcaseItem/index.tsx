import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

export type Tag = "spritepack" | "mod" | "library" | "tool"
  | "items" | "abilities" | "traits" | "effects" | "objects" | "npcs" | "mutators"
  | "sprites" | "sounds" | "ui" | "cheats" | "tweaks" | "other";

export type Props = {
  banner?: string | null,
  bannerLink?: string | null,
  title: string,
  description: string | React.ReactNode,
  buttons: ButtonData[],
  tags: Tag[],
}
export type ButtonType = "github" | "gamebanana" | "moddb" | "nexusmods" | "direct" | "website" | "other";
export type ButtonData = {
  type: ButtonType,
  link: string,
  text?: string,
}

const typeToName = {
  "github": "GitHub",
  "gamebanana": "GameBanana",
  "moddb": "ModDB",
  "nexusmods": "NexusMods",
  "direct": "Direct",
  "website": "Website",
}

export default function ({banner, bannerLink, title, description, buttons, tags}: Props) {

  banner ??= `https://via.placeholder.com/800x400?text=${title.replace(" ", "+")}`;

  return (
    <div className={styles.container}>
      {bannerLink
      ?
        <a href={bannerLink}>
        <img className={styles.banner} src={banner} width="800" height="400"/>
        </a>
      :
        <img className={styles.banner} src={banner} width="800" height="400"/>
      }
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div style={{opacity:0.4}}>
        {"Tags: "}
        <div className={styles.tags}>
          {tags.map(t => <span>{t}</span>)}
        </div>
      </div>
      <div className={styles.buttons}>
        {buttons.map(b => {
          
          return (
            <a className={clsx(styles.button, styles["button-" + b.type])} href={b.link}>
              {b.text ?? typeToName[b.type]}
            </a>
          );
        })}
      </div>
    </div>
  );
}
