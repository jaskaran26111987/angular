export class Ingredient {
    /*
    No need to define here we can do this in short way
    type script provide short way add public in contructor
    public name: string;
    public amount: number;
    */
    /*
        it will automatically recive the value and assign it
    */
    constructor(public name:string,public  amount:number) {
        
    }
}