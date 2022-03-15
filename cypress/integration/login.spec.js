/// <reference types="cypress" />
import LoginPage from '../support/PageObjects/loginPage';
const loginPage = new LoginPage();


const username = Cypress.env('username')
const password = Cypress.env('password')
const registerLoginPage = '/qa-portal/registerlogin/registerlogin.php';

const message_successfully = 'Successfully'
const message_username = "Please enter username."
const message_password = "Please enter your password."
const message_invalid_password = "The password you entered was not valid."      // username = test
const message_not_found_account = "No account found with that username." 
const message_err_page = "Oops! Something went wrong. Please try again later."  // username = № & password = №  

const login_page_text ="AQA internship Login"
const username_text ="Username"
const password_text ="Password"

const img_logo = 'https://pecode-software.web.app/static/media/icon-logo.f8576d05.svg'

describe ('Login spec file 15/03/22 t:22:22', function(){

  beforeEach('Login Page', () => {
    cy.visit('/qa-portal/registerlogin/registerlogin.php')
    // cy.fixture('users').then(function (user) {
    //   this.user = user;
    // })
  });

  it('Show image logo, headlines, login form, login button on the login page', function () {
    cy.get('#logomini').should('exist')
    cy.get('#logomini').invoke('attr', 'src').should('contain', img_logo)
    cy.get('h1').should('have.length',1).and('have.text',login_page_text);
    loginPage.getUsername().invoke('attr', 'placeholder').should('contain', username_text)
    loginPage.getPassword().invoke('attr', 'placeholder').should('contain', password_text)
    loginPage.clickLoginButton()
  })

  it('Show error message no account found for username='+username, function(){
    loginPage.enterLogin(username, password);
    cy.url().should('contain', registerLoginPage);
    loginPage.checkMessageUsername(message_not_found_account)

  })

  it('Show invalid password message', function(){
    loginPage.enterLogin(username, password);
    cy.url().should('contain', registerLoginPage)
    loginPage.checkMessagePassword(message_invalid_password)
  })  
 
  it('Show message for Incorrect login', function(){
    loginPage.enterLogin(username, password);
    cy.url().should('contain', registerLoginPage)
    cy.get('.help-block').should('have.text', message_username)
  })

  it('Show message with empty form fields', function () {
    loginPage.clickLoginButton()
    cy.get('.help-block').first().should('have.text', message_username)
    cy.get('.help-block').last().should('have.text', message_password)
    cy.url().should('contain', registerLoginPage)
  })
  
  it('Valid user login and password '+username, function() {
    loginPage.enterLogin(username, password);
    //cy.get('body').should('have.text', message_err_page) // username = № & password = №  
    cy.get('.help-block').should('have.text', message_successfully)
    // user account page
 })

})