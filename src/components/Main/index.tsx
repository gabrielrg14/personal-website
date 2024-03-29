import * as S from "./styles"
import { Container } from "components"

type MainProps = {
    children: React.ReactNode
}

export const Main = ({ children }: MainProps) => {
    return (
        <S.Main>
            <Container>
                <S.Section>{children}</S.Section>
            </Container>
        </S.Main>
    )
}
