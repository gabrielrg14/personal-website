import styled from "styled-components"
import { mediaQueries as media } from "utils"

import Link from "next/link"

export const Navbar = styled.nav`
    background-color: #161817;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem 20%;
    margin: auto;
    font-size: 1.2rem;

    ${media.lessThan("largeDesktop")`
        padding: 1rem 15%;
    `}

    ${media.lessThan("desktop")`
        padding: 1rem 10%;
    `}

    ${media.lessThan("tablet")`
        padding: 1rem 5%;
    `}

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
