import { USERNAME } from "common"
import { Mail, MarkGithub } from "@styled-icons/octicons"
import { Instagram, Linkedin, Whatsapp } from "@styled-icons/simple-icons"

import { headerLinks, socialMedias } from "utils"

describe("links", () => {
    describe("headerLinks", () => {
        it("should match snapshot", () => {
            expect(headerLinks).toMatchSnapshot()
        })

        it("should contain skills, experiences and projects links", () => {
            expect(headerLinks).toContainEqual({
                href: "/skills",
                label: "Skills"
            })
            expect(headerLinks).toContainEqual({
                href: "/experiences",
                label: "Experiences"
            })
            expect(headerLinks).toContainEqual({
                href: "/projects",
                label: "Projects"
            })
        })
    })

    describe("socialMedias", () => {
        it("should match snapshot", () => {
            expect(socialMedias).toMatchSnapshot()
        })

        it("should contain GitHub, LinkedIn and Instagram links", () => {
            expect(socialMedias).toContainEqual({
                name: "GitHub",
                link: `https://github.com/${USERNAME}/`,
                icon: <MarkGithub />
            })
            expect(socialMedias).toContainEqual({
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/gabrielrapuccigonzalez/",
                icon: <Linkedin />
            })
            expect(socialMedias).toContainEqual({
                name: "E-mail",
                link: "mailto:gabrielrapuccigonzalez14@hotmail.com",
                icon: <Mail />
            })
            expect(socialMedias).toContainEqual({
                name: "Instagram",
                link: "https://www.instagram.com/gabriel_rapucci/",
                icon: <Instagram />
            })
            expect(socialMedias).toContainEqual({
                name: "WhatsApp",
                link: "https://api.whatsapp.com/send/?phone=5519981392516&text&type=phone_number&app_absent=0/",
                icon: <Whatsapp />
            })
        })
    })
})
