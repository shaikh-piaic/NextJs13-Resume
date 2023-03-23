import { skills } from "../Data/data";
import Image from "next/image";
const Skills = () => {
	return (
		<section id='skills' className='py-10 bg-gray-800 relative '>
			<div className='mt-8 text-gray-100 text-center md:min-h-screen h-full px-5 md:px-16'>
				<h3 className='text-4xl font-semibold'>
					My <span className='text-cyan-600'>Skills</span>
				</h3>
				<p className='text-gray-400 mt-3 text-lg'>My knowledge</p>
				<div className='flex items-center justify-center mt-12 gap-10 flex-wrap px-5 md:px-16'>
					<div className='grid z-50 grid-cols-4 border-x-2 border-y-2 border-cyan-600 gap-8 xl:grid-cols-10 xl:gap-10 bg-gray-900 p-10 rounded-xl h-fit w-full'>
						{skills?.map((skill, i) => (
							<div
								className='h-full w-full flex justify-center items-center mb-5'
								key={i}>
								<div className='w-12 xl:w-16 xl:h-16'>
									<Image
										src={skill.icon.src}
										height={64}
										width={64}
										alt={skill.alt}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
