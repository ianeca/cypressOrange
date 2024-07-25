// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Given("ingresar a la pagina", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

When("ingresar las credenciales", () => {
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123");
    cy.get("button[type='submit']").click();
});

Then("validar credenciales", () => {
    cy.contains('h6','Dashboard').and('be.visible')
});


When("ingresar user erroneo", () => {
    cy.get("input[name='username']").type("AdminerrorÑÑÑÑ");
    cy.get("input[name='password']").type("admin123");
    cy.get("button[type='submit']").click();
});

Then("validar credenciales erroneas", () => {
    cy.contains('p','Invalid credentials').and('be.visible')
});

When("ingresar contraseña erronea", () => {
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123gfdgdfgdf");
    cy.get("button[type='submit']").click();
});


