const Contact = () => {
	return (
		<div
			name='Contacto'
			className='
			flex h-screen 
			w-full 
			bg-slate-900
			text-white
			'
		>
			<div
				className='
				max-w-screen-lg
                p-4
                mx-auto
                flex
                flex-col
                justify-center
                w-full
                h-full
                overflow-auto
                md:h-screen
				'
			>
				<div className='p-8'>
					<p
						className='
						text-4xl 
						font-bold 
						inline
						border-b-4 
						border-gray-400

						
						'
					>
						Contacto
					</p>
					<p
						className='
						py-6
						'
					>
						Si quieres contactar conmigo, puedes hacerlo a través del
						formulario.
					</p>
				</div>
				<div
					className='
						flex 
						justify-center
						items-center
					'
				>
					<form
						action=''
						className='
						flex flex-col
						w-full
						md:w-1/2

						'
					>
						<input
							type='text'
							placeholder='Tu nombre'
							className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
						/>
						<input
							type='email'
							placeholder='Tu email'
							className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
						/>
						<textarea
							name='mensaje'
							rows='10'
							placeholder='Tu mensaje'
							className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
						></textarea>
						<button
							className='
							text-white 
							bg-orange-600 p-2 
							rounded-md px-6 
							py-3 
							my-8
							mx-auto 
							flex 
							items-center
							cursor-pointer
							hover:scale-110
							duration-300
							
							'
						>
							Enviar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
