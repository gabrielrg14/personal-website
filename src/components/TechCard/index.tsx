import { Wrapper, Icon } from "./styles";

interface TechCardProps {
    icon: React.ReactNode,
    label: string,
}

const TechCard: React.FC<TechCardProps> = ({ icon, label }): JSX.Element => {
    return (
        <Wrapper>
            <Icon>{icon}</Icon>
            <p>{label}</p>
        </Wrapper>
    )
}

export default TechCard;