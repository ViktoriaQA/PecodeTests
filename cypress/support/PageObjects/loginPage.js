class LoginPage {
    getUserName() {
        return cy.get('input[name = username]');
    }

    getPassword(){
        return cy.get('input[name = password]');
    }

    getLoginButton() {
        return cy.get('.btn');
    }  
}

export default LoginPage