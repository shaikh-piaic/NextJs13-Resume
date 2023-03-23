import about from "@/public/about.svg";
import Image from "next/image";
const About = () => {
	const info = [
		{ text: "Years experience", count: "01" },
		{ text: "Completed Projects", count: "12" },
		{ text: "Companies Work", count: "01" },
	];
	return (
		<section id='about' className='py-10 text-white h-full md:min-h-screen'>
			<div className='text-center mt-8 w-full md:px-16 px-5'>
				<h3 className='text-4xl font-semibold'>
					About <span className='text-cyan-600'>Me</span>
				</h3>
				<p className='text-gray-400 my-3 text-lg'>My Introduction</p>
				<div className='flex md:flex-row flex-col-reverse items-center  lg:gap-12 max-w-screen-xl  mx-auto about'>
					<div className='py-2 order-2'>
						<div className='text-gray-300 my-3'>
							<p className='text-justify leading-7 w-11/12 mx-auto md:mx-0 lg:mx-auto'>
								As a front-end developer, I have experience working in dynamic,
								team-based environment and am skilled at designing and building
								flexible web apps with the help of Nextjs, Tailwind CSS, and
								TypeScript.
							</p>
							<div className='flex mt-10 items-center gap-7 mx-auto justify-center'>
								{info.map((content) => (
									<div key={content.text}>
										<h3 className='md:text-4xl text-2xl font-semibold text-white'>
											{content.count}
											<span className='text-cyan-600'>+</span>{" "}
										</h3>
										<span className='md:text-base text-xs'>{content.text}</span>
									</div>
								))}
							</div>
							<br />
							<br />
							<div className='flex items-center'>
								<a
									href='/Resume-Shaikh-Abdul-Sami.pdf'
									download='Resume-Shaikh-Abdul-Sami'
									className='mx-auto '>
									<button className='btn-primary'>Download Resume</button>
								</a>
							</div>
						</div>
					</div>
					<div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
						<div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg '>
							<Image
								src={about.src}
								alt=''
								className='w-full object-cover bg-cyan-600 rounded-xl'
								width={100}
								height={100}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
