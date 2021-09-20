
var Company = require("./company.js");

module.exports = class txtTemplate {
    constructor(company){
        this.company = company;
        this.greeting = "\ndear "
        this.regarding = "\nRE: "
        this.opening = "\n\nits exciting to see that "
        this.seeking = " are seeking an "
        this.to = " to "
        this.text = function(){
            return this.greeting + company.name + this.regarding + company.position + this.opening + company.name + this.seeking + company.position + this.to + company.purpose;
        }    
    }

    getText(){
        return this.text
    }
    setCompany(company){
        this.company = company
    }
}