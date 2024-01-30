import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 1.6rem;
`

export const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.6rem;
    margin-bottom: 0.8rem;

    :last-child {
        margin-bottom: 0;
    }
`

export const TitleList = styled.h1`
    font-size: 2.4rem;
    border-bottom: 2px solid #18a330;
    padding-bottom: 0.4rem;
`
