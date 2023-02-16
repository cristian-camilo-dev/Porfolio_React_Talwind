import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
	{
		id: 1,
		url: 'inicio',
	},
	{
		id: 2,
		url: 'Sobre mi',
	},

	{
		id: 3,
		url: 'Proyectos',
	},

	{
		id: 4,
		url: 'Experiencia',
	},

	{
		id: 5,
		url: 'Contacto',
	},
];

const NavBar = () => {
	const [showLinks, setShowLinks] = useState(false);

	return (
		<header className='flex justify-between items-center w-full h-20 text-white fixed bg-slate-900 px-4'>
			<div>
				<h1 className='font-GreatVibes text-5xl ml-2'>Cristian R.</h1>
			</div>

			<ul className='hidden md:flex'>
				{links.map((link) => {
					const { id, url } = link;
					return (
						<li
							key={id}
							className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'
						>
							<a href='#'>{url}</a>
						</li>
					);
				})}
			</ul>
			<div 
			onClick={() => setShowLinks(!showLinks)}
			className='cursor-pointer pr-4 z-10 text-white md:hidden'>
				{showLinks ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{showLinks && (
				<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-800 to-slate-900'>
				{links.map((link) => {
					const { id, url } = link;
					return (
						<li
							key={id}
							className='px-4 cursor-pointer capitalize text-4xl py-6 text-white hover:scale-105 duration-200'
						>
							<a href='#'>{url}</a>
						</li>
					);
				})}
			</ul>
			)}


		</header>
	);
};

export default NavBar;
