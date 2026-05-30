import * as S from "./styles"
import Link from "next/link"

export type LinkItemProps = {
    title: string
    href: string
    ariaLabel: string
    children: React.ReactNode
}

export const LinkItem = ({
    title,
    href,
    ariaLabel,
    children
}: LinkItemProps) => {
    return (
        <S.Wrapper>
            <Link
                title={title}
                href={href}
                aria-label={ariaLabel}
                target="_blank"
                rel="noreferrer"
            >
                {children}
            </Link>
        </S.Wrapper>
    )
}
