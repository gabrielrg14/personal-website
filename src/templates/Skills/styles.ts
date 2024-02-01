import styled from "styled-components"

export const Wrapper = styled.div`
    padding: var(--default-size);
`

export const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: var(--default-size);
    margin-bottom: var(--xs-size);

    :last-child {
        margin-bottom: 0;
    }
`

export const TitleList = styled.h1`
    font-size: var(--lg-size);
    border-bottom: 2px solid var(--highlight-color);
    padding-bottom: 0.4rem;
`
