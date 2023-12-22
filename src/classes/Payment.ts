import { HasFormatter } from "../interfaces/HasFormatter"

//we are just insuring that this class is following the hasformatter interface structure 

export class Payment implements HasFormatter {
    // private client: string;//can not accesss outside class
    // public details: string;
    // readonly amount: number;//can not change thid outside class
    constructor(readonly recipent: string,//can not accesss outside class
        private details: string,
        public amount: number) {
        // this.client = c;
        // this.details = d;
        // this.amount = a;

    }
    format() {

        // this.amount=10//can not change cause the variable is read only
        return `${this.recipent} is owed ${this.amount} and${this.details}`
    }
}