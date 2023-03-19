import cripto from '../assets/cripto.png';
import presupuesto from '../assets/presupuestos.png';
import movies from '../assets/movies.png';
import todoList from '../assets/Todolist.png';
import mentor from '../assets/Frontmentor.jpg';
import taller from '../assets/taller.png';

const Porfolio = () => {
	const projects = [
		{
			id: 1,
			src: cripto,
			alt: 'Web criptomonedas',
            url : 'https://github.com/cristian-camilo-dev/Cotizador-Criptos'
		},
		{
			id: 2,
			src: presupuesto,
			alt: 'Presupuesto',
            url : 'https://github.com/cristian-camilo-dev/aplicacion-presupuestos-javascript'
		},
		{
			id: 3,
			src: movies,
			alt: 'Peliculas',
            url : 'https://github.com/cristian-camilo-dev/async-landingpage'
		},
		{
			id: 4,
			src: todoList,
			alt: 'todo List',
            url : 'https://github.com/cristian-camilo-dev/TodoList'
		},
		{
			id: 5,
			src: mentor,
			alt: 'Front Mentor',
            url : 'https://github.com/cristian-camilo-dev/landing-page-frontmentor-Practica'
		},
		{
			id: 6,
			src: taller,
			alt: 'Taller',
            url : 'https://github.com/cristian-camilo-dev/javascript-html-css'
		},
	];

	return (
		<div name='porfolio' className='bg-slate-900 w-full text-slate-400 '>
			<div
				className='
                max-w-screen-lg
                p-4
                mx-auto
                flex
                flex-col
                justify-center
                w-full
                h-full'
			>
				<div className='pb-8'>
					<p
						className='
                        text-4xl
                        text-white
                        font-bold
                        inline
                        border-b-4
                        border-gray-500'
					>
						Porfolio
					</p>
					<p className='py-6'>Algunos de mis proyectos son:</p>
				</div>
				<div
					className='
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-8'
				>
					{projects.map((project) => (
						<div
							key={project.id}
							className='
                        shadow-lg 
                        shadow-slate-600
                        rounded-lg'
						>
							<img
								src={project.src}
								alt={project.alt}
								className='
                        rounded-md
                        duration-200
                        hover:scale-105
                        w-full
                        h-64
                        object-cover
                        object-center
                        
                        '
							/>
							<div className='flex items-center justify-center'>
								<h3>{project.alt}</h3>
								<a href={project.url} target='_blank' rel='noreferrer' >
									<button className='w-1/2 px-6 py-3 m-4 text-white duration-200 hover:scale-105'>
										Ver código
									</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Porfolio;
