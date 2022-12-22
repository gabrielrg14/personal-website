import styled from "styled-components";
import media from "../utils/mediaQueries";

export const Wrapper = styled.div`
    background-color: #161817;
    border-radius: 15px;
    border: 1px solid #18a330;
    padding: 1em;
    text-align: center;
    max-width: 60vw;
    margin: auto;

    ${media.lessThan("mobile")`
        max-width: 80vw;
    `}
`;
    
export const Bio = styled.h1`
    font-size: 1.5rem;
    line-height: 1.5;
`;
    
export const TitleList = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 5px;
    margin-top: 2rem;
`;

export const TechsLists = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;