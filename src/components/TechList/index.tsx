import * as S from "./styles"
import { TechCard } from "components"
import { techListing } from "utils"

type TechListProps = {
    list: string[]
    iconSize?: number
}

export const TechList = ({ list, iconSize }: TechListProps) => {
    return (
        <S.Wrapper>
            {techListing.map(
                ({ icon, label, identifier }) =>
                    list.includes(identifier) && (
                        <TechCard
                            key={identifier}
                            label={label}
                            icon={icon}
                            iconSize={iconSize}
                        />
                    )
            )}
        </S.Wrapper>
    )
}
