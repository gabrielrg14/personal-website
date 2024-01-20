import styled from "styled-components"
import { mediaQueries as media } from "utils"

export const Wrapper = styled.div`
    background-color: #161817;
    border-radius: 1rem;
    border: 1px solid #18a330;
    padding: 1rem;
    text-align: center;
    max-width: 60vw;
    margin: auto;

    ${media.lessThan("mobile")`
        max-width: 80vw;
    `}
`

export const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-bottom: 0.5rem;

    :last-child {
        margin-bottom: 0;
    }
`

export const TitleList = styled.h2`
    font-size: 1.5rem;
    border-bottom: 2px solid #18a330;
    padding-bottom: 0.25rem;
`
