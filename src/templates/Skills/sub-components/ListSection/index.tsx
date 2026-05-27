import * as S from "./styles"
import { TechList } from "components"

type ListSectionProps = {
    title: string
    list: string[]
}

export const ListSection = ({ title, list }: ListSectionProps) => {
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <TechList list={list} />
        </S.Wrapper>
    )
}
