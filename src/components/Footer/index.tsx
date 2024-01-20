import * as S from "./styles"
import Link from "next/link"
import { socialMedias } from "utils"

export const Footer = () => {
    return (
        <S.FooterTag>
            <S.SpanText>Made with 💚 by Gabriel Rapucci Gonzalez</S.SpanText>
            <S.DivIcons>
                {socialMedias.map(({ name, icon, link }) => (
                    <Link
                        key={link}
                        title={name}
                        href={link}
                        aria-label={name}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <S.Icon>{icon}</S.Icon>
                    </Link>
                ))}
            </S.DivIcons>
            <S.SpanText>
                {new Date().getFullYear()} <S.Copyright>©️</S.Copyright> All
                rights reserved
            </S.SpanText>
        </S.FooterTag>
    )
}
