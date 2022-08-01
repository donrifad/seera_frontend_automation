export default class SearchResultPage{
    constructor(){
        this.inputSearchBox = '[data-testid="AutoCompleteInput"]'
        this.priceList = "//div[contains(@data-testid,'PriceLabel')]/span[@class='Price__Value']"
        this.lblHotelPrice = '[data-testid="HotelSearchResult__Hotel0__PriceLabel"]'
        this.btnLowPrice = '[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]'
        this.lblHotelSearchResultCount = '[data-testid=HotelSearchResult__resultsFoundCount]'
        this.drpDownRoomTypeSelected = 'select[data-testid="HotelSearchBox__ReservationSelect_Select"] option:selected'
    }

    getInputSearchBox(){
        return cy.get(this.inputSearchBox)
    }
    
    getPriceList(){
        return cy.xpath(this.priceList)
    }

    getHotelPriceLbl(){
        return cy.get(this.lblHotelPrice,{timeout:30000})
    }

    getBtnLowestPriceFirst(){
        return cy.get(this.btnLowPrice)
    }

    getHotelSearchResultCount(){
        return cy.get(this.lblHotelSearchResultCount,{timeout:30000})
    }

    getDrpDownSelectedRoomType(){
        return cy.get(this.drpDownRoomTypeSelected)
    }
}