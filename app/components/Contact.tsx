"use client";
import mail from "@/public/mail.png";
import location from "@/public/location.png";
import phone from "@/public/phone.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
	const router = useRouter();
	const [name, setName] = useState("");
	const [subject, setSubject] = useState("");
	const [msg, setMsg] = useState("");
	const handleSubmit = () => {
		setMsg("");
		setName("");
		setSubject("");
	};
	const contact_info = [
		{ logo: mail, text: "admin@abdulsami.com.pk" },
		{ logo: phone, text: "+92 333 2075132" },
		{
			logo: location,
			text: "Karachi Pakistan",
		},
	];
	return (
		<section id='contact' className='py-10 px-3 text-white'>
			<div className='text-center mt-8 px-5 md:px-16'>
				<h3 className='text-4xl font-semibold'>
					Contact <span className='text-cyan-600'>Me</span>
				</h3>
				<p className='text-gray-400 mt-3 text-lg'>Get in touch</p>

				<div
					className='mt-16 flex md:flex-row flex-col
			 gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
					<form className='flex flex-col flex-1 gap-5'>
						<input
							type='text'
							placeholder='Your Name'
							name='name'
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
						<input
							type='text'
							placeholder='Your Subject'
							name='subject'
							value={subject}
							onChange={(event) => setSubject(event.target.value)}
						/>
						<textarea
							placeholder='Your Message'
							rows={10}
							name='message'
							value={msg}
							onChange={(event) => setMsg(event.target.value)}></textarea>
						<button
							className='btn-primary w-fit'
							onClick={() => {
								router.push(
									`mailto:admin@abdulsami.com.pk?subject=${subject}&body=${msg}`
								);
								handleSubmit();
							}}>
							Send Message
						</button>
					</form>
					<div className='flex flex-col  gap-7 '>
						{contact_info.map((contact, i) => (
							<div
								key={i}
								className='flex flex-row  
					  text-left gap-4 flex-wrap items-center'>
								<div className='min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'>
									<Image src={contact.logo} alt='' width={35} height={35} />
								</div>
								<span className='md:text-base text-xs break-words flex-shrink-0'>
									{contact.text}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
