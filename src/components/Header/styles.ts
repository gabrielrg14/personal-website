import styled from "styled-components"
import { mediaQueries as media } from "utils"

import Link from "next/link"

export const Header = styled.header``

export const Navbar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
    padding: 2.4rem 0;
    font-size: 1.9rem;

    ${media.lessThan("mobile")`
        flex-direction: column;
    `}
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    line-height: 2.4rem;
    transition: color 0.5s ease;

    :hover {
        color: #18a330;
    }
`

export const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
`

export const NavItem = styled("li")`
    :first-of-type {
        ${media.lessThan("mobile")`
            flex-basis: 100%;
        `}
    }
`
