import React from 'react';
import { Props as ModProps } from './components/ShowcaseItem';

const list: ModProps[] = [
  {
    banner: "https://github.com/SugarBarrel/RogueLibs/blob/main/img/RogueLibs.png?raw=true",
    title: "RogueLibs",
    description: "A really important library that is required for almost all mods. A must-have.",
    buttons: [
      {type:"github", link:"https://github.com/SugarBarrel/RogueLibs"},
      {type:"website", link:"https://sugarbarrel.github.io/RogueLibs"},
      {type:"direct", link:"https://github.com/SugarBarrel/RogueLibs/releases/latest"},
      {type:"gamebanana", link:"https://gamebanana.com/mods/54650"},
      {type:"moddb", link:"https://www.moddb.com/mods/roguelibs"},
      {type:"nexusmods", link:"https://www.nexusmods.com/streetsofrogue/mods/13"},
    ],
    tags: ["library"],
  },
  {
    title: "SpritePackLoader",
    description: "Allows you to create and load custom spritepacks to replace vanilla textures.",
    buttons: [
      {type:"github", link:"https://github.com/SugarBarrel/SpritePackLoader"},
      {type:"direct", link:"https://github.com/SugarBarrel/SpritePackLoader/releases/latest/download/SpritePackLoader.dll"},
    ],
    tags: ["mod", "spritepack", "sprites", "ui"],
  },
  {
    banner: "https://cdn.discordapp.com/attachments/766890919768621058/852479372656640000/SRP.png",
    title: "Sidi's Resprite Project",
    description: (
      <span>
        {"Replaces vanilla sprites (ALL items, some objects and MOST characters) with more bulky and prettier ones."}
      </span>
    ),
    buttons: [
      {type:"direct", link:"https://cdn.discordapp.com/attachments/453258186514890772/1023126744674340904/Sidis_resprite_project.spritepack"},
    ],
    tags: ["spritepack", "items", "objects", "npcs", "sprites", "innovative"],
  },
  {
    banner: "https://cdn.discordapp.com/attachments/453258186514890772/1020755128548081704/unknown.png",
    title: "Sidi's Resprite Project - Alt Syringes",
    description: (
      <span>
        {"Sidi's Resprite Project addon. "}
        <b>{"Install along with the main spritepack."}</b>
      </span>
    ),
    buttons: [
      {type:"direct", link:"https://cdn.discordapp.com/attachments/453258186514890772/1023135281374822440/Sidis_resprite_project_alt_syringes.spritepack"},
    ],
    tags: ["spritepack", "items", "sprites"],
  },
  {
    banner: "https://github.com/zTBBz/TBB/blob/main/images/Logo.png?raw=true",
    title: "Traveler's Bag Build",
    description: (
      <span>
        {"Adds a lot of items and traits that greatly complement Streets of Rogue's sometimes boring gameplay. With cool sound effects."}
        <br/>
        {"Successor of "}
        <a href="https://github.com/SugarBarrel/aToI">aToI</a>
        {", "}
        <a href="https://github.com/zTBBz/SMaD">SMaD</a>
        {" and "}
        <a href="https://github.com/zTBBz/MTP">MTP</a>
        {"."}
      </span>
    ),
    buttons: [
      {type:"github", link:"https://github.com/zTBBz/TBB"},
      {type:"website", link:"https://zTBBz.github.io/TBB"},
      {type:"direct", link:"https://github.com/zTBBz/TBB/releases/latest/download/TBB.dll"},
    ],
    tags: ["mod", "items", "traits", "sounds"],
  },
  {
    banner: "https://github.com/Freiling87/CCU/raw/master/CCU/Images/CCU_Large.png",
    title: "CCU",
    description: "Tons of tools for custom content design!",
    buttons: [
      {type:"github", link:"https://github.com/Freiling87/CCU"},
      {type:"gamebanana", link:"https://gamebanana.com/mods/380574"},
      {type:"direct", link:"https://gamebanana.com/dl/846356"},
      ],
    tags: ["mod", "mutators", "npcs", "traits", "innovative"], 
  },
  {
    banner: "https://images.gamebanana.com/img/ss/mods/60d3c4459febd.jpg",
    title: "NPC Prefixes V",
    description: "This mod provides NPC prefixes, a bunch of passive items, and some prefix-related mutators. Some of the prefixes are ridiculously deadly which will likely increase the game's difficulty.",
    buttons: [
      {type:"gamebanana", link:"https://gamebanana.com/mods/298283"},
      {type:"direct", link:"https://gamebanana.com/dl/751475"},
    ],
    tags: ["mod", "items", "traits", "effects", "npcs", "mutators", "innovative"],
  },
  {
    banner: "https://images.gamebanana.com/img/ss/mods/5f61f918c29b1.jpg",
    title: "Edit Characters Through Description",
    description: "Allows you add ANY items, traits, abilities and colors to custom characters, even the ones not normally available.",
    buttons: [
      {type:"github", link:"https://github.com/SugarBarrel/ECTD"},
      {type:"gamebanana", link:"https://gamebanana.com/mods/54649"},
      {type:"direct", link:"https://github.com/SugarBarrel/ECTD/releases/latest/download/ECTD.dll"},
    ],
    tags: ["mod", "cheats"],
  },
  {
    title: "SOR Community's Hi-Res Overhaul (WIP)",
    description: "Back before Abbysssal had fully figured out TK2D sprites, we had organized a community overhaul of Hi-Res sprites. This only replaces about 30-ish sprites so far, mostly items.",
    buttons: [
      {type:"direct", link:"https://cdn.discordapp.com/attachments/453259227797127188/878281486225264720/HiResOverhaul.spritepack"},
    ],
    tags: ["spritepack", "items", "sprites"],
  },
  {
    banner: "https://github.com/cf27n/FollowerPlus/blob/main/FollowerPlusIcon.png?raw=true",
    title: "FollowerPlus",
    description: "A small plugin that adds a few more interactive features to create a friendlier follower-oriented playstyle. Currently, it only adds enhanced follower inventory management.",
    buttons: [
      {type:"github", link:"https://github.com/cf27n/FollowerPlus"},
      {type:"gamebanana", link:"https://gamebanana.com/mods/344669"},
      {type:"direct", link:"https://github.com/cf27n/FollowerPlus/files/7767730/FollowerPlus_1.0.1-alpha.zip"},
    ],
    tags: ["mod", "npcs", "ui", "tweaks", "innovative"],
  },
  {
    title: "SORCE - Streets of Rogue Civil Engineering",
    description: (<span>
      {"50+ city-related and visual effects mutators and a couple of shitty traits."}
    </span>),
    buttons: [
      {type:"github", link:"https://github.com/Freiling87/SORCE"},
      {type:"direct", link:"https://cdn.discordapp.com/attachments/453259227797127188/1021855777654329434/SORCE.dll"},
    ],
    tags: ["mod", "traits", "mutators", "effects", "objects", "npcs", "sounds", "tweaks", "other", "innovative"],
  },
  {
    title: "a Ton of Mutators (aToM)",
    description: "This mod adds a lot (104) mutators to the game. They are separated into 5 categories.",
    buttons: [
      {type:"github", link:"https://github.com/SugarBarrel/aToM"},
      {type:"gamebanana", link:"https://gamebanana.com/mods/54648"},
      {type:"direct", link:"https://github.com/SugarBarrel/aToM/releases/latest/download/aTonOfMutators.dll"},
    ],
    tags: ["mod", "mutators"],
  },
  {
    banner: "https://cdn.discordapp.com/attachments/433748059172896769/927219045101633576/2022-01-02_221709.png",
    title: "Demolish That Freaking Wall",
    description: "Tired of that damn wall on the way to your precious Hacker? Well, whatever, just download this mod and that wall will be demolished.",
    buttons: [
      {type:"direct", link:"https://cdn.discordapp.com/attachments/433748059172896769/927219194301403217/DemolishThatFreakingWall.dll"},
    ],
    tags: ["mod", "tweaks"],
  },
  {
    banner: "https://cdn.discordapp.com/attachments/766891245141622804/927781262855385128/SPOILER_DefeatingTheResistance.png",
    title: "Chaos at Home Base",
    description: "Includes an incredible fight, cool cutscenes and a new ending! This is one of the most extensive mods I have ever made.",
    buttons: [
      {type:"gamebanana", link:"https://gamebanana.com/mods/348074"},
      {type:"direct", link:"https://cdn.discordapp.com/attachments/433748059172896769/927599350056644658/ChaosAtHomeBase.dll"},
    ],
    tags: ["mod", "story", "innovative"],
  },
  {
    title: "Bullet Breaker Challenge",
    description: "Ever wanted to improve your shooting accuracy and reaction speed in Streets of Rogue? Then this mod is for you! Your goal is to destroy your opponent's bullets mid-air. If the bullets are too fast for you, there's also a Practice mode, that halves their speed.",
    buttons: [
      {type:"direct", link:"https://cdn.discordapp.com/attachments/453259227797127188/936207622179287050/BulletBreakerChallenge.dll"},
    ],
    tags: ["mod", "mutators"],
  },
  {
    banner: "https://github.com/Freiling87/Sorquol/blob/master/Sorquol/Images/Sorquol_512x512.png?raw=true",
    title: "Sorquol - Streets of Rogue Quality of Life",
    description: "Sorquol is a quality of life mod for the custom content editors. Right now, it's mainly hotkeys for the Chunk Editor.",
    buttons: [
      {type:"github", link:"https://github.com/Freiling87/Sorquol"},
      {type:"gamebanana", link:"https://gamebanana.com/mods/335156"},
      {type:"direct", link:"https://gamebanana.com/dl/691177"},
    ],
    tags: ["mod", "ui", "tweaks"],
  },
  {
    title: "RogueLibs Test Module",
    description: (
      <span>
        {"Adds 3 abilities, 9 items, 2 traits and 1 effect."}
        <br/>
        {"For testing purposes."}
      </span>
    ),
    buttons: [
      {type:"github", link:"https://github.com/SugarBarrel/RogueLibs"},
      {type:"direct", link:"https://github.com/SugarBarrel/RogueLibs/releases/latest/download/RogueLibsCore.Test.dll"},
    ],
    tags: ["mod", "items", "abilities", "traits", "effects"],
  },
  {
    title: "Sprites of Bune",
    description: "Replaces only four sprites. Scary guns!",
    buttons: [
      {type:"direct", link:"https://cdn.discordapp.com/attachments/453259227797127188/876516669814616104/SpritesOfBune.spritepack"},
    ],
    tags: ["spritepack", "items", "sprites"],
  },
  {
    banner: "https://cdn.discordapp.com/attachments/453259227797127188/954336805212262446/2022-03-18_180414.png",
    title: "Abbysssal's Paint.net SpritePack",
    description: "Replaces all item sprites in the game with the ones carefully drawn by hand by a professional*, in Paint.net. (* ᵖʳᵒᶠᵉˢˢᶦᵒⁿᵃˡ ᵖʳᵒᵍʳᵃᵐᵐᵉʳ)",
    buttons: [
      {type:"direct", link:"https://cdn.discordapp.com/attachments/453259227797127188/954336805455560754/Abbysssals_Paint.net.spritepack"},
    ],
    tags: ["spritepack", "items", "sprites"],
  },
  {
    title: "Among Us in SoR",
    description: "The impostors are among us.",
    buttons: [
      {type:"direct", link:"https://github.com/SugarBarrel/AmongUsSoR/releases/download/v0.4.0/AmongUsSoR.dll"},
    ],
    tags: ["mod", "abilities"],
  },
];

export default list;
