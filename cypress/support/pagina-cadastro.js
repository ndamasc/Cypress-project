import { elementEMENTS } from "./elementements";

const elementement = elementEMENTS;

class Cadastro{
    acessarPaginaDeCadastro(){
        cy.visit('https://adopet-frontend-iota.vercelement.app/');
        cy.get(element.registerButton).click();
    }

    preencherForm(){
        cy.get(element.nome).type('Carolinda');
        cy.get(element.email).type('carolina@email.com');
        cy.get(element.inputPassword).type('Senha123');
        cy.get(element.confirmPassword).type('Senha123');
    }

    submeterCadastro(){
        cy.get(element.submitButton).click();
    }
}

export default new Cadastro();