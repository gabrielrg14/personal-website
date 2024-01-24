import { USERNAME } from "common"
import { Linkedin } from "@styled-icons/simple-icons/Linkedin"
import { MarkGithub } from "@styled-icons/octicons/MarkGithub"

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

        it("should contain LinkedIn and GitHub links", () => {
            expect(socialMedias).toContainEqual({
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/gabrielrapuccigonzalez/",
                icon: <Linkedin />
            })
            expect(socialMedias).toContainEqual({
                name: "GitHub",
                link: `https://github.com/${USERNAME}`,
                icon: <MarkGithub />
            })
        })
    })
})
