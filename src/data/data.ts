import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Play With Electric Nike",
  subtitle: "Adapt 2.0 Sneakers",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
  btn: "Explore More",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  btn: "Explore More",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const footerAPI = {
  titles: [
    { title: "About Nike" },
    { title: "Get Help" },
    { title: "Company" },
  ],
  links: [
    [
      { link: "News" },
      { link: "Careers" },
      { link: "Investors" },
      { link: "Prupose" },
      { link: "Sustainability" },
    ],
    [
      { link: "Order Status" },
      { link: "Shipping & Delivery" },
      { link: "Payment Options" },
      { link: "Gift Card Balance" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Signup" },
      { link: "Nike Jouneral" },
      { link: "Send Us Feeback" },
    ],
  ],
};

const popularsales = [
    {
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
]

const toprateslaes = [
    {
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
]

export { heroapi, footerAPI, sneaker, highlight, popularsales, toprateslaes };
