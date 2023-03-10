import styled from "styled-components";
import media from "../../utils/mediaQueries";

import { StyledIconBase } from "@styled-icons/styled-icon";

export const Wrapper = styled.div`
    max-width: 60vw;
    margin: auto;

    ${media.lessThan("mobile")`
        max-width: 80vw;
    `}
`;

export const SupportText = styled.p`
    background-color: #161817;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 10px;
    border-radius: 15px;
    padding: 0.5em;
`;

export const ProjectsList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    ${media.lessThan("desktop")`
        grid-template-columns: 1fr;
    `}
`;

export const Project = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 1rem;
    background-color: #161817;
    border-radius: 15px;
    border: 1px solid #18a330;
    padding: 1em;
`;
    
export const ProjectTitle = styled.h2`
    font-size: 1.5rem;
`;
    
export const ProjectWebsite = styled.h3`
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-bottom: 1em;
    
    a:hover {
        transition: 0.5s ease-out;
        color: #18a330;
        text-decoration: none;
    }
`;
    
export const Icon = styled.span`
    ${StyledIconBase} {
        width: 20px;
        margin-bottom: 5px;
    }
`;

export const ProjectDescription = styled.span`
    font-size: 1.1rem;
    line-height: 1.2;
`;