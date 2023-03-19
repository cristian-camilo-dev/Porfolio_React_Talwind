import pictureHome from '../assets/profile-pic.png';
import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<section name='inicio' className='flex h-screen  w-full bg-slate-900 md:h-[70vh] '>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4 md:flex-row  '>
				<div className='flex flex-col justify-center mb-6'>
					<h2 className='text-white text-4xl sm:text-7xl font-bold '>
						Desarrollador Web Junior{' '}
					</h2>
					<p className='text-slate-400 py-4 max-w-md'>
						Tengo habilidades en análisis y resolución de problemas, y estoy
						altamente familiarizado con las tecnologías HTML, CSS, JavaScript,
						SASS, React, Node, SQL, Git y Scrum.
					</p>
					<div>
						<Link to='Proyectos' smooth={true} duration={500}>
						<button
							className='
							group
							text-white
							w-fit
							px-6
							py-3 
							my-2
							flex items-center
							bg-orange-600
							rounded-md
							cursor-pointer

						'
						>
							Porfolio
							<span className='group-hover:rotate-90 duration-300 ml-3'>
								<TiArrowRightThick size={25} />
							</span>
						</button>
						</Link>
					</div>
				</div>
				<div>
					<img
						src={pictureHome}
						alt='profile'
						className='rounded-2xl mx-auto mt-4 w-11/12 md:w-full'
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
