import { Wrapper } from "./styles";

interface TechListProps {
    children: React.ReactNode,
}

const TechList: React.FC<TechListProps> = ({ children }): JSX.Element => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default TechList;