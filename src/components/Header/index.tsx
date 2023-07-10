import { useRouter } from 'next/router';
import Image from 'next/image';

import { Navbar, NavList, NavItem, NavLink } from "./styles";

import Logo from "public/images/logo/logo-32.png";

import links from "../../common/utils/headerLinks";

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
                        <NavItem>
                            <NavLink 
                                key={label} href={href} 
                                style={{ textDecoration: router.pathname === href ? "2px underline #18a330" : undefined }}
                            >
                                {label}
                            </NavLink>
                        </NavItem>
                    ))}
                </NavList>
            </Navbar>
        </header>
    )
}

export default Header;