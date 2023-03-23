"use client";
import React, { useEffect, useState } from "react";
import menu from "@/public/menu.svg";
import Image from "next/image";

const Navbar = () => {
	const [sticky, setSticky] = useState(false);
	const [open, setOpen] = useState(false);
	const menuLinks = [
		{ name: "HOME", link: "#home" },
		{ name: "ABOUT", link: "#about" },
		{ name: "SKILLS", link: "#skills" },
		{ name: "PROJECTS", link: "#projects" },
		{ name: "CONTACT", link: "#contact" },
	];
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const nav = document.querySelector("nav");
			window.scrollY > 0 ? setSticky(true) : setSticky(false);
		});
	}, []);
	return (
		<nav
			className={`fixed w-full left-0 top-0 z-[999] ${
				sticky ? "bg-white/60  text-gray-900" : "text-white"
			}`}>
			<div className='flex items-center justify-between md:px-16 px-5 mx-auto max-w-screen-xl'>
				<div>
					<h4 className='text-4xl uppercase font-bold'>
						SH<span className='text-cyan-600'>AI</span>KH
					</h4>
				</div>
				<div
					className={` ${
						sticky ? "md:bg-white/0 bg-white" : "text-white"
					} text-gray-900 md:hidden lg:block hidden pl-7 py-2 font-medium rounded-bl-full`}>
					<ul className='flex items-center gap-1 py-2 text-lg'>
						{menuLinks?.map((menu, i) => (
							<li key={i} className='pl-6 hover:text-cyan-600'>
								<a href={menu?.link}>{menu?.name}</a>
							</li>
						))}
					</ul>
				</div>
				<div
					onClick={() => setOpen(!open)}
					className={`z-[999]  ${
						open ? "text-gray-900" : "text-gray-100"
					} text-3xl md:block lg:hidden m-5`}>
					<Image src={menu.src} alt='' width={30} height={30} />
				</div>
				<div
					className={`md:block lg:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
				open ? "right-0" : "right-[-100%]"
			}`}>
					<ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
						{menuLinks?.map((menu, i) => (
							<li
								onClick={() => setOpen(false)}
								key={i}
								className='px-6 hover:text-cyan-600'>
								<a href={menu?.link}>{menu?.name}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
