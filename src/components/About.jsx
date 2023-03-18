const About = () => {
	return (
		<div
			name='about'
			className='w-full h-screen bg-slate-900  text-slate-400  '
		>
			<div
				className='max-w-screen-lg p-4 mx-auto flex flex-col
                justify-center w-full h-full '
			>
				<div className='pb-8 '>
					<p className='text-4xl font-bold inline border-b-4 border-white '>
						Sobre Mi
					</p>
				</div>
				<p className='text-xl mt-9'>
					Soy un desarrollador web junior con una formación sólida en
					tecnologías web y un deseo innato de aprender y crecer en mi carrera.
					Mi enfoque está en crear soluciones eficientes y efectivas que
					satisfagan las necesidades de los usuarios, y tengo habilidades en
					análisis y resolución de problemas.
				</p>
               <br/>
				<p className="text-xl">
					Estoy familiarizado con tecnologías como HTML, CSS, JavaScript, y
					estoy en proceso de aprendizaje de otras tecnologías como SASS, React,
					Node, SQL y Git. Me considero una persona proactiva, colaborativa y
					con capacidad para trabajar en equipo. Estoy buscando una oportunidad
					para crecer profesionalmente y aportar valor a un equipo de desarrollo
					web.
				</p>
			</div>
		</div>
	);
};

export default About;
