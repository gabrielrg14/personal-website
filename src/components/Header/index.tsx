import { useRouter } from 'next/router';
import Image from 'next/image';

import { Navbar, NavList, NavLink } from "./styles";

import Logo from "public/images/logo/logo-32.png";

import links from "../../utils/headerLinks";

const Header: React.FC = (): JSX.Element => {
    const router = useRouter();

    return (
        <header>
            <Navbar>
                <NavLink href="/" 
                    style={{ color: router.pathname === "/" ? "#18a330" : undefined }}
                >
                    <span>{"<"}</span>
                    <Image src={Logo} priority alt="Logo image" />
                    <span>{"/>"}</span>
                </NavLink>

                <NavList>
                    {links.map(({ href, label }) => (
                        <NavLink 
                            key={label} href={href} 
                            style={{ textDecoration: router.pathname === href ? "2px underline #18a330" : undefined }}
                        >
                            {label}
                        </NavLink>
                    ))}
                </NavList>
            </Navbar>
        </header>
    )
}

export default Header;