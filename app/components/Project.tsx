import Image from "next/image";
import { projects } from "../Data/data";
const Project = () => {
	return (
		<section id='projects' className='py-10 text-white'>
			<div className='text-center'>
				<h3 className='text-4xl font-semibold'>
					My <span className='text-cyan-600'>Projects</span>
				</h3>
				<p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
			</div>
			<br />
			<div className='flex max-w-6xl gap-6 px-5 mx-auto items-center relative'>
				<div className=' flex items-center justify-center mt-12 gap-10 flex-wrap'>
					{projects.map((project_info, i) => (
						<div className='h-fit  p-4 bg-slate-700 rounded-xl' key={i}>
							<Image
								src={project_info.img.src}
								alt=''
								className='rounded-lg object-center object-cover md:h-40 '
								width={300}
								height={300}
							/>
							<h3 className='text-xl my-4'>{project_info.name}</h3>
							<div className='flex gap-3'>
								<a
									href={project_info.github_link}
									target='_blank'
									className='text-cyan-600 md:hover:text-white bg-gray-800 px-2 py-1 inline-block rounded-full'>
									Github
								</a>
								<a
									href={project_info.live_link}
									target='_blank'
									className='text-cyan-600 md:hover:text-white bg-gray-800 px-2 py-1 inline-block rounded-full'>
									Live Demo
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Project;
