class Product {
    constructor(tariffName){
        this.tariffName = tariffName;
    }
}

class Basic extends Product {
    BASE_COST = 5;
    CONSUMPTION_COST = 0.22;

    getAnnualCost(consumption){
        return this.BASE_COST *12 + this.CONSUMPTION_COST * consumption;
    }
}

class Packaged extends Product{
    CONSUMPTION_LIMIT = 4000;
    CONSUMPTION_COST = 800;
    CONSUMPTION__ADDITIONAL_COST = 0.30;

    getAnnualCost(consumption){
        if (consumption <= 4000) {
            return this.CONSUMPTION_COST;
        }
        return this.CONSUMPTION_COST + (consumption - this.CONSUMPTION_LIMIT) * this.CONSUMPTION__ADDITIONAL_COST;
    }
}

module.exports = {
    compare: function(consumption) {
        const productA = new Basic("basic electricity tariff");
        const productB = new Packaged("Packaged tariff");
        
        const products = [];
        products.push({"Tariff name": productA.tariffName, "Annual costs (€/year)": productA.getAnnualCost(consumption)})
        products.push({"Tariff name": productB.tariffName, "Annual costs (€/year)": productB.getAnnualCost(consumption)})
        return sort(products);
    }
};

function sort(products) {
    products.sort((a, b) => (a["Annual costs (€/year)"] > b["Annual costs (€/year)"]) ? 1 : -1);
    return products;
}