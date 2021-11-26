class LoginPage {

    getUsername =  () => {return cy.get('input[name = username]')};
    getPassword = () => {return cy.get('input[name = password]')};
    getLoginButton = () => {return cy.get('.btn').click()}  
    getMessages = () => {cy.get('.help-block')}

   
    enterLogin =(username, password) => {
        this.getUsername().type(username).should('have.value', username);
        this.getPassword().type(password,{log: false});
        this.getLoginButton();
    }

    checkMessageUsername = (message) => {
        this.getMessages().first().should('have.text', message)
    }

    checkMessagePassword = (message) => {
        this.getMessages().last().should('have.text', message)
    }
}

export default LoginPage