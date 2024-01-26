import * as S from "./styles"
import Link from "next/link"
import { socialMedias } from "utils"

export const Footer = () => {
    return (
        <S.Footer>
            <S.Text>Made with 💚 by Gabriel Rapucci</S.Text>
            <S.SocialMedias>
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
            </S.SocialMedias>
            <S.Text>
                {new Date().getFullYear()} <S.Copyright>©️</S.Copyright> All
                rights reserved
            </S.Text>
        </S.Footer>
    )
}
