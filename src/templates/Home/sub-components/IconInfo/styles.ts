import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: var(--xs-size);
    margin: var(--xs-size);
`

export const Info = styled.h3`
    font-size: var(--md-size);
    line-height: var(--lg-size);
    text-overflow: ellipsis;
    overflow: hidden;
`
