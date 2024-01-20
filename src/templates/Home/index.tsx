import { NextSeo } from "next-seo"

import * as S from "./styles"
import { IUser } from "interfaces"
import { Mail, Organization, Location } from "@styled-icons/octicons"

type HomeTemplateProps = {
    user: IUser
}

export const HomeTemplate = ({ user }: HomeTemplateProps) => {
    return (
        <>
            <NextSeo
                title="Gabriel - Frontend React Developer"
                description="Welcome to my personal website. Here you will learn a little more about me, my skills, the technologies I have knowledge of, the ones I use and know well, the ones I'm currently studying and also the projects I've developed."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "Gabriel Rapucci Gonzalez, Campinas, Brazil, Dev, Web Dev, Frontend, Dev Frontend, Developer, Frontend Developer, React Developer, Frontend React Developer, Portfolio, Resume, Personal Project, Personal Website"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
            />

            <S.Wrapper>
                <S.Avatar>
                    {user.avatar_url && (
                        <S.AvatarImage
                            src={user.avatar_url}
                            height={250}
                            width={250}
                            priority
                            alt="Gabriel's avatar image"
                        />
                    )}
                </S.Avatar>

                <S.BlackPillText>
                    <h1>{user.name}</h1>
                </S.BlackPillText>

                <S.PillText>
                    <h2>{user.bio}</h2>
                </S.PillText>

                <S.BlackPillText>
                    <S.InfoRow>
                        <Mail size={20} color="#f7fcfe" />
                        <S.Info>{user.email}</S.Info>
                    </S.InfoRow>

                    <S.InfoRow>
                        <Organization size={20} color="#f7fcfe" />
                        <S.Info>{user.company}</S.Info>
                    </S.InfoRow>

                    <S.InfoRow>
                        <Location size={20} color="#f7fcfe" />
                        <S.Info>{user.location}</S.Info>
                    </S.InfoRow>
                </S.BlackPillText>
            </S.Wrapper>
        </>
    )
}
