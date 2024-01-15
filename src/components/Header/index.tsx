import { useRouter } from "next/router"

import * as S from "./styles"
import Image from "next/image"
import Logo from "/public/images/logo/logo-32.png"
import { headerLinks as links } from "utils"

export const Header = () => {
    const router = useRouter()

    return (
        <header>
            <S.Navbar>
                <S.NavLink
                    href="/"
                    aria-label="Go to Home"
                    style={{
                        color: router.pathname === "/" ? "#18a330" : undefined
                    }}
                >
                    <span>{"<"}</span>
                    <Image src={Logo} priority alt="Logo image" />
                    <span>{"/>"}</span>
                </S.NavLink>

                <S.NavList>
                    {links.map(({ href, label }) => (
                        <S.NavItem key={label}>
                            <S.NavLink
                                href={href}
                                aria-label={`Go to ${label} page`}
                                style={{
                                    textDecoration:
                                        router.pathname === href
                                            ? "2px underline #18a330"
                                            : undefined
                                }}
                            >
                                {label}
                            </S.NavLink>
                        </S.NavItem>
                    ))}
                </S.NavList>
            </S.Navbar>
        </header>
    )
}
