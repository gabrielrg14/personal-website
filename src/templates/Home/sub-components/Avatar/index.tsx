import * as S from "./styles"

export type AvatarProps = {
    url: string
}

export const Avatar = ({ url }: AvatarProps) => {
    if (!url) return null

    return (
        <S.Wrapper>
            <S.Avatar
                src={url}
                height={250}
                width={250}
                priority
                alt="Avatar image"
            />
        </S.Wrapper>
    )
}
