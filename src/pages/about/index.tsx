import { useContext } from "react";
import { UserContext } from "../../common/contexts/user";

import Head from 'next/head';

import { 
    Wrapper,
    Bio,
    TitleList,
    TechsLists,
} from "../../common/styles/pages/about";

import TechList from "../../components/TechList";
import TechCard from "../../components/TechCard";

import known from "../../common/utils/knownTechs";
import knowledge from "../../common/utils/knowledgeTechs";
import studying from "../../common/utils/studyingTechs";
import potential from "../../common/utils/potentialTechs";

const About: React.FC = (): JSX.Element => {
    const user = useContext(UserContext);

    return (
        <Wrapper>
            <Head>
                <title>{`<About me />`}</title>
                <meta name="keywords" content="About me, About, Dev, Frontend" />
                <meta name="description" content="A little more about who Gabriel Rapucci Gonzalez is" />
            </Head>

            <Bio>{user.bio}</Bio>
            
            <TechsLists>
                <TitleList>Known and used technologies:</TitleList>
                <TechList>
                    {known.map(({ icon, label }) => (
                        <TechCard key={label} label={label} icon={icon} />
                    ))}
                </TechList>

                <TitleList>Technologies with basic knowledge:</TitleList>
                <TechList>
                    {knowledge.map(({ icon, label }) => (
                        <TechCard key={label} label={label} icon={icon} />
                    ))}
                </TechList>

                <TitleList>Technologies being studied:</TitleList>
                <TechList>
                    {studying.map(({ icon, label }) => (
                        <TechCard key={label} label={label} icon={icon} />
                    ))}
                </TechList>

                <TitleList>Potential technologies to be studied:</TitleList>
                <TechList>
                    {potential.map(({ icon, label }) => (
                        <TechCard key={label} label={label} icon={icon} />
                    ))}
                </TechList>
            </TechsLists>
        </Wrapper>
    )
}

export default About;