/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Navigates to a header page.
         *
         * @param page string - The name of the header page you want to navigate to
         *
         * @example cy.navigateToHeaderPage("Skills") // Navigate to the provided page
         */
        navigateToHeaderPage(
            page?: string
        ): Cypress.Chainable<JQuery<HTMLButtonElement>>

        /**
         * Validates a footer link.
         *
         * @param title string - The title of the link you want to validate
         * @param href string - The href of the link you want to validate
         *
         * @example cy.validateFooterLink("LinkedIn", "https://www.linkedin.com/in/gabrielrapuccigonzalez/") // Validates that the link is visible and has the correct href
         */
        validateFooterLink(
            title: string,
            href: string
        ): Cypress.Chainable<JQuery<HTMLAnchorElement>>

        /**
         * Navigates to a project link.
         *
         * @param name string - The name of the project you want to link to
         * @param title string - The title of the link you want to navigate
         *
         * @example cy.navigateToProjectLink("Personal Website", "GitHub") // Navigate to the project link provided
         */
        navigateToProjectLink(
            name: string,
            title: string
        ): Cypress.Chainable<JQuery<HTMLAnchorElement>>
    }
}
