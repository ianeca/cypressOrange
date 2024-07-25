# cypress/e2e/duckduckgo.feature
Feature: Como usuario quiero ingresar mis credenciales para acceder a la plataforma
    Background: Ingresar a la pagina
        Given ingresar a la pagina
    Scenario: Login exitoso
        When ingresar las credenciales
        Then validar credenciales

    Scenario: Login fallido por user
        When ingresar user erroneo
        Then validar credenciales erroneas

    Scenario: Login fallido por contraseña
        When ingresar contraseña erronea
        Then validar credenciales erroneas