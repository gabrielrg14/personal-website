import { ISocialMedia } from "interfaces"
import { USERNAME } from "common"
import { Mail, MarkGithub } from "@styled-icons/octicons"
import { Instagram, Linkedin, Whatsapp } from "@styled-icons/simple-icons"

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
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/gabriel_rapucci/",
        icon: <Instagram />
    },
    {
        name: "WhatsApp",
        link: "https://api.whatsapp.com/send/?phone=5519981392516&text&type=phone_number&app_absent=0/",
        icon: <Whatsapp />
    }
]
