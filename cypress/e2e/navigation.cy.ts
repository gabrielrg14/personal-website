/// <reference types="../support/commands.d.ts" />

describe("Navigation", () => {
    beforeEach(() => cy.visit("/"))

    it("navigate to Home page by header", () => {
        cy.contains("main section h1", Cypress.env("fullName"))
            .as("titleFullName")
            .should("be.visible")

        // first navigate to the Skills page and then navigate to the home page
        cy.navigateToHeaderPage("Skills")
        cy.navigateToHeaderPage("Home")

        cy.get("@titleFullName").should("be.visible")
    })

    it("navigate to Skills page by header", () => {
        cy.navigateToHeaderPage("Skills")
        cy.contains("main section h1", "Main technologies I master").should(
            "be.visible"
        )
    })

    it("navigate to Experiences page by header", () => {
        cy.navigateToHeaderPage("Experiences")
        cy.contains("main section h1", "Front-end Software Developer").should(
            "be.visible"
        )
    })

    it("navigate to Projects page by header", () => {
        cy.navigateToHeaderPage("Projects")
        cy.contains("main section h2", "Personal Website").should("be.visible")
    })

    it("navigate to a project's GitHub repository", () => {
        cy.navigateToHeaderPage("Projects")
        cy.navigateToProjectLink("Pokedex", "GitHub")

        cy.origin("https://github.com/gabrielrg14/pokedex/", () => {
            cy.contains("a", "pokedex").should("be.visible")
            cy.contains(
                ".BorderGrid-cell a",
                "pokedex.gabrielrapucci.com.br"
            ).should("be.visible")
        })
    })

    it("navigate to a project Website", () => {
        cy.navigateToHeaderPage("Projects")
        cy.navigateToProjectLink("Pokedex", "Website")

        cy.origin("https://pokedex.gabrielrapucci.com.br/", () => {
            cy.contains("main section ul li a h2", "Bulbasaur").should(
                "be.visible"
            )
        })
    })

    it("validate the GitHub link in the footer and navigate to it", () => {
        const link = "https://github.com/gabrielrg14/"

        cy.validateFooterLink("GitHub", link)
            .invoke("removeAttr", "target")
            .click()

        cy.origin(link, () => {
            cy.contains("span.vcard-fullname", Cypress.env("fullName")).should(
                "be.visible"
            )
            cy.contains("span.vcard-username", "gabrielrg14").should(
                "be.visible"
            )
        })
    })

    it("validate the LinkedIn link in the footer", () => {
        cy.validateFooterLink(
            "LinkedIn",
            "https://www.linkedin.com/in/gabrielrapuccigonzalez/"
        )
    })

    it("validate the E-mail link in the footer", () => {
        cy.validateFooterLink(
            "E-mail",
            "mailto:gabrielrapuccigonzalez14@hotmail.com"
        )
    })

    it("validate the Instagram link in the footer", () => {
        cy.validateFooterLink(
            "Instagram",
            "https://www.instagram.com/gabriel_rapucci/"
        )
    })

    it("validate the WhatsApp link in the footer", () => {
        cy.validateFooterLink(
            "WhatsApp",
            "https://api.whatsapp.com/send/?phone=5519981392516&text&type=phone_number&app_absent=0/"
        )
    })
})
