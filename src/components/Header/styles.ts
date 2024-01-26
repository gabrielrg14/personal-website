import styled from "styled-components"
import { mediaQueries as media } from "utils"

import Link from "next/link"

export const Header = styled.header`
    background-color: #161817;
`

export const Navbar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    font-size: 1.2rem;

    ${media.lessThan("mobile")`
        flex-direction: column;
    `}
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #f7fcfe;
    line-height: 1.5rem;
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
    gap: 1rem;
`

export const NavItem = styled("li")`
    :first-of-type {
        ${media.lessThan("mobile")`
            flex-basis: 100%;
        `}
    }
`
