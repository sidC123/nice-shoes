import { hamburger } from '@assets/icons/index';
import { headerLogo } from '@assets/images/index';
import { navLinks } from '@constants/index';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className='padding-x py-5 fixed top-0 z-50 w-full bg-neutral-300 shadow'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <Image src={headerLogo} alt="headerlogo" width={130} height={29} />
                </a>

                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </Link>
                        </li>
                    ))
                    }
                </ul>

                <div className='max-lg:block hidden'>
                    <Image src={hamburger} alt="hamburger" width={25} height={25} />
                </div>

            </nav>
        </header>
    )
}

export default Navbar