import styled from "styled-components";

import Link from 'next/link';

export const Navbar = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    font-size: 1.2em;
    background-color: #161817;
`;

export const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`;

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #F7FCFE;
    line-height: 1.5rem;
    
    :hover {
        transition: 0.5s;
        color: #18a330;
        text-decoration: none;
    }
`;