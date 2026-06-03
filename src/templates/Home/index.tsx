import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

import * as S from "./styles"
import { IUser } from "interfaces"
import { Avatar, Bio, IconInfo, Name, Pill } from "./sub-components"
import { Organization, Location } from "@styled-icons/octicons"

type HomeTemplateProps = {
    user: IUser
}

export const HomeTemplate = ({ user }: HomeTemplateProps) => {
    return (
        <>
            <NextSeo {...pageSeo} />

            <S.Wrapper>
                <Avatar url={user.avatar_url} />

                <Pill variant="dark">
                    <Name text={user.name} />
                </Pill>

                <Pill>
                    <Bio text={user.bio} />
                </Pill>

                <Pill variant="dark">
                    <IconInfo
                        icon={<Organization size={20} />}
                        info={user.company}
                    />
                    <IconInfo
                        icon={<Location size={20} />}
                        info={user.location}
                    />
                </Pill>
            </S.Wrapper>
        </>
    )
}
