import { ISocialMedia } from "interfaces"
import { USERNAME } from "common"
import { Mail, MarkGithub } from "@styled-icons/octicons"
import { Linkedin } from "@styled-icons/simple-icons"

export const socialMedias: ISocialMedia[] = [
    {
        name: "GitHub",
        link: `https://github.com/${USERNAME}/`,
        icon: <MarkGithub />
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/gabrielrapuccigonzalez/",
        icon: <Linkedin />
    },
    {
        name: "E-mail",
        link: "mailto:gabrielrapuccigonzalez14@hotmail.com",
        icon: <Mail />
    }
]
