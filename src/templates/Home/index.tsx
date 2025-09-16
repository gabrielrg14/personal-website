import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

import * as S from "./styles"
import { IUser } from "interfaces"
import { Organization, Location } from "@styled-icons/octicons"

type HomeTemplateProps = {
    user: IUser
}

export const HomeTemplate = ({ user }: HomeTemplateProps) => {
    return (
        <>
            <NextSeo {...pageSeo} />

            <S.Wrapper>
                <S.Avatar>
                    {user.avatar_url && (
                        <S.AvatarImage
                            src={user.avatar_url}
                            height={250}
                            width={250}
                            priority
                            alt="Avatar image"
                        />
                    )}
                </S.Avatar>

                <S.BlackPillText>
                    <S.Name>{user.name}</S.Name>
                </S.BlackPillText>

                <S.PillText>
                    <S.Bio>{user.bio}</S.Bio>
                </S.PillText>

                <S.BlackPillText>
                    <S.InfoRow>
                        <Organization size={20} />
                        <S.Info>{user.company}</S.Info>
                    </S.InfoRow>

                    <S.InfoRow>
                        <Location size={20} />
                        <S.Info>{user.location}</S.Info>
                    </S.InfoRow>
                </S.BlackPillText>
            </S.Wrapper>
        </>
    )
}
