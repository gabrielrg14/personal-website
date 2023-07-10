import { FooterTag, DivIcons, Icon, SpanText } from "./styles";

import socialMedias from "../../common/utils/socialMedias";

import Link from 'next/link';

const Footer: React.FC = (): JSX.Element => {
    return (
        <FooterTag>
            <SpanText>Made with ❤️ by Gabriel Rapucci Gonzalez</SpanText>
            <DivIcons>
                {socialMedias.map(({ name, icon, link }) => (
                    <Link key={link} href={link} target="_blank" rel="noreferrer" aria-label={name}>
                        <Icon>{icon}</Icon>
                    </Link>
                ))}
            </DivIcons>
            <SpanText>{new Date().getFullYear()} ©️ All rights reserved</SpanText>
        </FooterTag>
    )
}

export default Footer;