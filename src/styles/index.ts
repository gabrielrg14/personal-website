import styled from "styled-components";
import media from "../utils/mediaQueries";

import Image from 'next/image'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin: auto 1rem;
`;

export const Avatar = styled.div`
    display: flex;
`;

export const AvatarImage = styled(Image)`
    height: 100%;
    width: 100%;
    border-radius: 100%;
    margin-bottom: 20px;
    animation: appear-on-screen 1s;
`;

export const PillText = styled.div`
    background-color: #F7FCFE;
    color: #161817;
    border-radius: 50px;
    padding: 10px;
    width: 50%;
    animation: appear-on-screen 1.5s;

    ${media.lessThan("tablet")`
        width: 80%;
    `}

    ${media.lessThan("mobile")`
        width: 100%;
    `}
`;

export const BlackPillText = styled(PillText)`
    background-color: #161817;
    color: #F7FCFE;
`;

export const Info = styled.h2`
    font-size: 1.2rem;
    line-height: 1.2;
`;