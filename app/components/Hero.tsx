import { Facebook, Instagram, Twitter, Linkedin } from "./SocialIcon";
const Hero = () => {
	// "https://placehold.co/600x400.png"
	const social_media = [
		<Facebook
			style='fill-gray-600 hover:fill-white'
			link='https://www.facebook.com/ShaikhAbdulSami1804/'
			key={1}
		/>,
		<Instagram
			style='fill-gray-600 hover:fill-white'
			link='https://www.instagram.com/hafiz_shaikh_sami/'
			key={1}
		/>,
		<Twitter
			style='fill-gray-600 hover:fill-white'
			link='https://twitter.com/HafizShaikhSami'
			key={1}
		/>,
		<Linkedin
			style='fill-gray-600 hover:fill-white'
			link='https://www.linkedin.com/in/shaikhabdulsami'
			key={1}
		/>,
	];
	return (
		<section
			id='home'
			className='h-full flex py-64 md:flex-row flex-col md:items-center md:min-h-screen w-full justify-center'>
			{/* <div className="flex-1 flex items-center justify-center h-full">
			<img src={profile7.src} alt="" className="md:w-11/12 h-full object-cover" />
		  </div> */}
			<div className='flex-1 max-w-screen-xl'>
				<div className='md:text-justify  px-5 md:px-16 '>
					<h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold '>
						<span className='text-cyan-600 md:text-6xl text-5xl '>
							Welcome!
							<br />
						</span>
						My Name is <span>Shaikh Abdul Sami</span>
					</h1>
					<h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600 '>
						Front-End Developer
					</h4>
					<button className='btn-primary mt-8'>Contact Me</button>
					<div className='mt-8 text-3xl flex items-center justify-start  gap-5 '>
						{social_media?.map((icon, i) => (
							<div
								key={i}
								className='text-gray-600 hover:text-white cursor-pointer '>
								{icon}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
