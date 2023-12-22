//we are just insuring that this class is following the hasformatter interface structure 
export class Payment {
    // private client: string;//can not accesss outside class
    // public details: string;
    // readonly amount: number;//can not change thid outside class
    constructor(recipent, //can not accesss outside class
    details, amount) {
        // this.client = c;
        // this.details = d;
        // this.amount = a;
        this.recipent = recipent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.amount=10//can not change cause the variable is read only
        return `${this.recipent} is owed ${this.amount} and${this.details}`;
    }
}
