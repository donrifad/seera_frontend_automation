export default class HomePage{
constructor(){
    this.lblFooterLogo = 'footer svg[data-testid="Footer__QitafLogo"]'
    this.navigationTabs = '#uncontrolled-tab-example-tab-NAVTAB'
    this.btnFromDate = '//*[@data-testid="FlightSearchBox__FromDateButton"]//span[2]'
    this.btnToDate = '//*[@data-testid="FlightSearchBox__ToDateButton"]//span[2]'
    this.lblHotelContact = '//a/strong[contains(text(),"TELNO")]'
    this.inputSearchBox = '[data-testid="AutoCompleteInput"]'
    this.listAutoDropDownItem1 = '[data-testid="AutoCompleteResultItem0"]'
    this.selectRoomType = '[data-testid="HotelSearchBox__ReservationSelect_Select"]'
    this.btnSearch = '[data-testid="HotelSearchBox__SearchButton"]'
}

getFooterLogo(){
    return cy.get(this.lblFooterLogo)
}

getTab(tab){
    let xpath = this.navigationTabs.replace('NAVTAB',tab)
    return cy.get(xpath)
}

getBtnFromDate(){
    return cy.xpath(this.btnFromDate)
}

getBtnToDate(){
    return cy.xpath(this.btnToDate)
}

getTelNo(telNo){
    let xpath = this.navigationTabs.replace('TELNO',telNo)
    return cy.xpath(this.btnToDate)
}

getHotelSearchBox(){
    return cy.get(this.inputSearchBox)
}

getLocationItemOneFromDropDwnList(){
    return cy.get(this.listAutoDropDownItem1)
}

searchHotels(location,roomType){
    cy.get(this.inputSearchBox).type(location)
    cy.get(this.listAutoDropDownItem1).click()
    cy.get(this.selectRoomType).select(roomType)
    cy.get(this.btnSearch).click()
}

// cy.xpath("//*[@data-testid='AutoCompleteResultsList']/li[contains(@data-testid,'AutoCompleteResultItem')]").each(($e1, index, $list) => {
//       if (index == 0) {
//         cy.wrap($e1).click()
//       }
//     })


}