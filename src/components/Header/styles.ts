import styled from "styled-components"
import { mediaQueries as media } from "utils"

import Link from "next/link"

export const Navbar = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    font-size: 1.2rem;
    background-color: #161817;

    ${media.lessThan("mobile")`
        flex-direction: column;
    `}
`

export const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`

export const NavItem = styled("li")`
    list-style: none;
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #f7fcfe;
    line-height: 1.5rem;

    :hover {
        transition: 0.5s;
        color: #18a330;
        text-decoration: none;
    }
`
