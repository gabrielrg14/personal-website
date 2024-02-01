import styled from "styled-components"
import { mediaQueries as media } from "utils"

import Link from "next/link"

export const Header = styled.header``

export const Navbar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--default-size);
    padding: var(--lg-size) 0;
    font-size: 2rem;

    ${media.lessThan("mobile")`
        flex-direction: column;
    `}
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    line-height: var(--lg-size);
    transition: color 0.5s ease;

    :hover {
        color: var(--highlight-color);
    }
`

export const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--default-size);
`

export const NavItem = styled("li")`
    :first-of-type {
        ${media.lessThan("mobile")`
            flex-basis: 100%;
        `}
    }
`
