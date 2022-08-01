/// <reference types ="Cypress" />
require('cypress-xpath');

import HomePage from '../support/pageObjects/HomePage';
import SearchResultPage from '../support/pageObjects/SearchResultPage';
import HeaderNavBar from '../support/pageObjects/HeaderNavBar';


import DateUtil from '../support/utils/DateUtil';
import * as pageDataUtil from '../support/utils/PageDataUtil';

const homePage = new HomePage()
const searchResultPage = new SearchResultPage()
const headerNavBar = new HeaderNavBar()
const dateUtil = new DateUtil()
let testData
let bookingData
let assertData
let langSpecificBookingData
let appLanguage

/**
 * Retrieve test data from fixtures
 */
describe('Seera Frontend E2E Tests', () => {
  before(function () {
    cy.fixture('localization').then(function (data) {
      testData = data
    })

    cy.fixture('bookingdata').then(function (booking) {
      bookingData = booking
    })

  })

  /**
   * Retrive the languge from env file or cli
   * Retrive the test data based on the language
   */
  beforeEach(function () {
    appLanguage = Cypress.env('lang')
    cy.visit(Cypress.env('url'))
    cy.viewport(window.screen.width, window.screen.height);

    if (appLanguage == 'arabic') {
      assertData = testData.selectedLanguge.arabic
      langSpecificBookingData = bookingData.selectedLanguge.arabic
    } else if (appLanguage == 'english') {
      assertData = testData.selectedLanguge.english
      langSpecificBookingData = bookingData.selectedLanguge.english
    }
  })

  /**
   * Verify hompe page contents based on language
   */
  it('Verify Home Page Contents', () => {
    //verify default language is allways arabic
    headerNavBar.getBtnLanguageSwitch().should('have.text', testData.selectedLanguge.arabic.visibleLanguageOption)
    headerNavBar.getTabHeaderRetrieveMyBooking().should('have.text', testData.selectedLanguge.arabic.retrivemybooking)
    headerNavBar.getSignInButton().should('have.text', testData.selectedLanguge.arabic.signIn)
    headerNavBar.getDrpDwnCurrencySelector().should('have.text', testData.currency.SAR)
    //switching the language based on user parameters
    if (appLanguage == 'english') {
      cy.changeLanguage(headerNavBar.btnLanguageSwitch, testData.language.english)
      headerNavBar.getBtnLanguageSwitch().should('have.text', assertData.visibleLanguageOption)
      headerNavBar.getTabHeaderRetrieveMyBooking().should('have.text', assertData.retrivemybooking)
      headerNavBar.getSignInButton().should('have.text', assertData.signIn)
    }
    homePage.getFooterLogo().should('be.visible')
    homePage.getTelNo(testData.hotelContact.telphone).should('be.visible')
    homePage.getTab(pageDataUtil.tabs.HOTELS).should('have.attr', 'aria-selected', 'false')
    homePage.getBtnFromDate().should('have.text', dateUtil.getCurrentPlusDate(1, 'days'))
    homePage.getBtnToDate().should('have.text', dateUtil.getCurrentPlusDate(2, 'days'))

  })

  /**
   * Switching the language based on user parameter
   * Click Tabs Hotels
   * Search Hotels
   * Assert values in header and search result page
   * Sort the hotels by price
   * Verify prices are sorted
   */

  it('Verify Hotel Search With Prices Are In Sorting Order', () => {
    //verify default language is allways arabic
    headerNavBar.getBtnLanguageSwitch().should('have.text', testData.selectedLanguge.arabic.visibleLanguageOption)
    headerNavBar.getTabHeaderRetrieveMyBooking().should('have.text', testData.selectedLanguge.arabic.retrivemybooking)
    headerNavBar.getSignInButton().should('have.text', testData.selectedLanguge.arabic.signIn)
    headerNavBar.getDrpDwnCurrencySelector().should('have.text', testData.currency.SAR)

    if (appLanguage == 'english') {
      cy.changeLanguage(headerNavBar.btnLanguageSwitch, testData.language.english)
      headerNavBar.getBtnLanguageSwitch().should('have.text', assertData.visibleLanguageOption)
      headerNavBar.getTabHeaderRetrieveMyBooking().should('have.text', assertData.retrivemybooking)
      headerNavBar.getSignInButton().should('have.text', assertData.signIn)
    } else if (appLanguage == 'arabic') {
      cy.changeLanguage(headerNavBar.btnLanguageSwitch, testData.language.arabic)
    }
    //searching for the hotel
    homePage.getTab(pageDataUtil.tabs.HOTELS).click()
    homePage.searchHotels(langSpecificBookingData.searchText.Dubai,
      langSpecificBookingData.roomSelection.singleRoomWithOneAdult)
    //verify after search
    headerNavBar.getBtnLanguageSwitch().should('have.text', assertData.visibleLanguageOption)
    headerNavBar.getTabHeaderRetrieveMyBooking().should('have.text', assertData.retrivemybooking)
    headerNavBar.getSignInButton().should('have.text', assertData.signIn)
    headerNavBar.getDrpDwnCurrencySelector().should('have.text', testData.currency.SAR)
    searchResultPage.getHotelPriceLbl().should('be.visible')
    searchResultPage.getHotelSearchResultCount().should('be.visible')
    searchResultPage.getInputSearchBox().should('include.value', langSpecificBookingData.searchText.Dubai)
    searchResultPage.getDrpDownSelectedRoomType().should('have.text', langSpecificBookingData.roomSelection.singleRoomWithOneAdult)
    //sorting the hotels and verify
    searchResultPage.getBtnLowestPriceFirst().click()
    searchResultPage.getPriceList().then(($prices) => {
      const innerText = (el) => el.innerText
      const prices = Cypress._.map($prices, (el) =>
        parseFloat(innerText(el)),
      )
      // confirm the "prices" array is already sorted
      const sorted = Cypress._.sortBy(prices)
      expect(sorted).to.deep.equal(prices)
    })

  })

})