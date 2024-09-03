import { USERNAME } from "common"
import { MarkGithub } from "@styled-icons/octicons/MarkGithub"
import { Linkedin } from "@styled-icons/simple-icons/Linkedin"
import { Instagram } from "@styled-icons/simple-icons/Instagram"
import { Whatsapp } from "@styled-icons/simple-icons/Whatsapp"

export const socialMedias = [
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
