//we are just insuring that this class is following the hasformatter interface structure 
export class Invoice {
    // private client: string;//can not accesss outside class
    // public details: string;
    // readonly amount: number;//can not change thid outside class
    constructor(client, //can not accesss outside class
    details, amount) {
        // this.client = c;
        // this.details = d;
        // this.amount = a;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.amount=10//can not change cause the variable is read only
        return `${this.client} owes ${this.amount} and${this.details}`;
    }
}
