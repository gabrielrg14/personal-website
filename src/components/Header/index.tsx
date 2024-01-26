import { useRouter } from "next/router"

import * as S from "./styles"
import Image from "next/image"
import Link from "next/link"
import Logo from "/public/images/logo/logo-32.png"
import { Button } from "components"
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
                    {"<"}
                    <Image src={Logo} priority alt="Logo image" />
                    {"/>"}
                </S.NavLink>

                <S.NavList>
                    <Link
                        href={"/files/gabriel-rapucci-gonzalez.pdf"}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download CV"
                        download
                    >
                        <Button size="small" rounded>
                            Download CV
                        </Button>
                    </Link>

                    {links.map(({ href, label }) => (
                        <S.NavItem key={label}>
                            <S.NavLink
                                href={href}
                                aria-label={`Go to ${label} page`}
                                style={{
                                    borderBottom:
                                        router.pathname === href
                                            ? "2px solid #18a330"
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
