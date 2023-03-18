import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const links = [
	{
		id: 1,
        child: (
            <>
             Linkedin   <FaLinkedin size={30} />
            </> 
        ),
        href: 'https://www.linkedin.com/in/cristian-camilo-rodriguez-dev/',
    },
    {
        id: 2,
        child: (
            <>
              Github<FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/cristian-camilo-dev',
    },
    {
        id: 3,
        child: (
            <>
             Email <HiOutlineMail size={30} />
            </>
        ),
        href: 'mailto:cristianrodrig149@gmail.com',
    },
    {
        id: 4,
        child: (
            <>
            Currículo <BsFillPersonLinesFill size={30} />
            </>
        ),
        href:'/public/cv-CristianRodriguez.pdf',
        download:true,
    },
];

export const SocialLinks = () => {
	return (
		<div className='hidden xl:flex flex-col top-[35%] left-0 fixed '>
			<ul>
                {links.map((link) =>(
                     <li key={link.id} className='flex justify-between items-center w-40 h-14 px-3 ml-[-100px] hover:ml-[-10px] bg-[#e53170] hover:rounded-md duration-300'> 
                     <a
                         className='flex justify-between items-center w-full text-white  font-bold'
                         href={link.href}
                        download={link.download}
                        target="_blank"
                        rel="noreferrer"
                     >
                         <>
                            {link.child}
                         </>
                     </a>
                 </li>
                ) )}


				
			</ul>
		</div>
	);
};
