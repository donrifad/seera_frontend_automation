export default class HeaderNavBar{
    constructor(){
        this.btnLanguageSwitch = '[data-testid="Header__LanguageSwitch"]'
        this.tabHeaderRetrieveMyBooking = '[data-testid="Header__RetrieveMyBooking"]'
        this.drpDwnCurrencySelector = '[data-testid="Header__CurrencySelector"]'
        this.btnSignIn = '[data-testid="Header__SignInButton"]'
    }

    getBtnLanguageSwitch(){
        return cy.get(this.btnLanguageSwitch)
    }
    
    getTabHeaderRetrieveMyBooking(){
        return cy.get(this.tabHeaderRetrieveMyBooking)
    }
    
    getDrpDwnCurrencySelector(){
        return cy.get(this.drpDwnCurrencySelector)
    }

    getSignInButton(){
        return cy.get(this.btnSignIn)
    }

}