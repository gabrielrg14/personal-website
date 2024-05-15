/// <reference types="../support/commands.d.ts" />

describe("Download", () => {
    it("download the resume file", () => {
        cy.visit("/")

        cy.get("header nav a[download]").should("be.visible").click()

        cy.readFile("cypress/downloads/gabriel-rapucci-gonzalez.pdf").should(
            "exist"
        )
    })
})
