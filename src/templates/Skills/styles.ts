import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #161817;
    border-radius: 1rem;
    border: 1px solid #18a330;
    padding: 1rem;
`

export const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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
