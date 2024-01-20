import { USERNAME } from "common"
import { Linkedin, Github } from "@styled-icons/simple-icons"

import { headerLinks, socialMedias } from "."

describe("links", () => {
    describe("headerLinks", () => {
        it("should contain skills and projects links", () => {
            expect(headerLinks).toContainEqual({
                href: "/skills",
                label: "Skills"
            })
            expect(headerLinks).toContainEqual({
                href: "/projects",
                label: "Projects"
            })
        })
    })

    describe("socialMedias", () => {
        it("should contain LinkedIn and GitHub links", () => {
            expect(socialMedias).toContainEqual({
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/gabrielrapuccigonzalez/",
                icon: <Linkedin />
            })
            expect(socialMedias).toContainEqual({
                name: "GitHub",
                link: `https://github.com/${USERNAME}`,
                icon: <Github />
            })
        })
    })
})
