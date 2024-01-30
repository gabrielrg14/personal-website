import * as S from "./styles"

type BlackboardProps = {
    className?: string
    children: React.ReactNode
}

export const Blackboard = ({ className, children }: BlackboardProps) => {
    return <S.Blackboard className={className}>{children}</S.Blackboard>
}
