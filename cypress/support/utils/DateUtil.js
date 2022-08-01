export default class DateUtil{


    getCurrentPlusDate(days,type){
        const date = new Date()
        date.setDate(date.getDate() + days);
        const formattedDate = date.toLocaleDateString().split('/')

        if(type === "days"){
            return formattedDate[0]
        }
        else if(type === "months"){
            return formattedDate[1]
        }
    }

}