Cypress.Commands.add("navigateToHeaderPage", (page = "Home") => {
    if (page === "Projects")
        cy.intercept("GET", "**/users/gabrielrg14").as("getUser")

    const anchorSelector = () => {
        if (page === "Home")
            return cy.get("header nav a[aria-label='Go to Home']")
        return cy.contains("header nav ul li a", `${page}`)
    }

    anchorSelector().should("be.visible").click()
    if (page === "Projects") cy.wait("@getUser")
})

Cypress.Commands.add("validateFooterLink", (title: string, href: string) => {
    cy.get(`footer ul li a[title='${title}']`)
        .should("be.visible")
        .and("have.attr", "href", href)
})

Cypress.Commands.add("navigateToProjectLink", (name: string, title: string) => {
    cy.contains("main section h2", name)
        .parent()
        .find(`ul li a[title='${title}']`)
        .should("be.visible")
        .invoke("removeAttr", "target")
        .click()
})
