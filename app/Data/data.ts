import { StaticImageData } from "next/image";
import html from "@/public/html.png";
import css from "@/public/css.png";
import js from "@/public/js.png";
import react from "@/public/react.png";
import typescript from "@/public/typescript.png";
import nodejs from "@/public/nodejs.png";
import mongodb from "@/public/mongodb.png";
import nextjs from "@/public/nextjs.png";
import express from "@/public/express.png";
import tailwind from "@/public/tailwind.png";
import python from "@/public/python.png";
import github from "@/public/github.png";

import panaverse1 from "@/public/panaverse-chakra.png";
import panaverse2 from "@/public/panaverse-tailwind.png";
import spaceX from "@/public/Space_X.png";
import quiz from "@/public/Quiz_App.png";
import timer from "@/public/Timer_App.png";

interface Skill {
	icon: StaticImageData;
	alt: string;
}
interface Project {
	img: StaticImageData;
	name: string;
	github_link: string;
	live_link: string;
}
export const skills: Skill[] = [
	{
		icon: html,
		alt: "html logo",
	},
	{
		icon: css,
		alt: "css logo",
	},
	{
		icon: js,
		alt: "javascript logo",
	},
	{
		icon: react,
		alt: "react logo",
	},
	{
		icon: nodejs,
		alt: "nodejs logo",
	},
	{
		icon: express,
		alt: "express logo",
	},
	{
		icon: mongodb,
		alt: " mongodb logo",
	},
	{
		icon: nextjs,
		alt: "nextjs logo",
	},
	{
		icon: tailwind,
		alt: "tailwind logo",
	},
	{
		icon: typescript,
		alt: "typescript logo",
	},
	{
		icon: python,
		alt: "python logo",
	},
	{
		icon: github,
		alt: "github logo",
	},
];

export const projects: Project[] = [
	{
		img: spaceX,

		name: "Space X",
		github_link: "https://github.com/ShaikhAbdulSami/SpaceX",
		live_link: "https://shaikh-spacex-app.surge.sh",
	},
	{
		img: quiz,

		name: "Quiz App",
		github_link: "https://github.com/ShaikhAbdulSami/ShaikhQuiz-firebase",
		live_link: "https://shaikh-quizapp-type.surge.sh",
	},

	{
		img: timer,

		name: "Timer App",
		github_link: "https://github.com/ShaikhAbdulSami/Timer-App",
		live_link: "https://shaikh-timer-app.surge.sh/",
	},
	{
		img: panaverse1,
		name: "Panaverse Dao (CHAKRA-UI)",
		github_link: "https://github.com/shaikh-piaic/NextJs13-Panaverse-Dao",
		live_link: "https://panaverse-dao-omega.vercel.app",
	},
	{
		img: panaverse2,

		name: "Panaverse Dao (Tailwind CSS)",
		github_link: "https://github.com/shaikh-piaic/NextJs13-Panaverse",
		live_link: "https://panaverse-dao-beta.vercel.app",
	},
];
