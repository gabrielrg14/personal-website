import styled from "styled-components";
import media from "../../utils/mediaQueries";

import { StyledIconBase } from "@styled-icons/styled-icon";

export const FooterTag = styled.footer`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 10%;
    font-size: 1rem;
    background-color: #161817;

    ${media.lessThan("tablet")`
        flex-direction: column;
        justify-content: center;
    `}
`;

export const DivIcons = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Icon = styled.div`
    ${StyledIconBase} {
        color: #f7fcfe;
        width: 20px;
    }
    
    && :hover {
        transition: 0.5s ease-out;
        color: #18a330;
    }
`;

export const SpanText = styled.span`
    text-align: center;
`;