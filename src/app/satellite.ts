export class Satellite {
    //Add these properties to the Satellite class in satellite.ts
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    //Add a constructor to Satellite class
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        //Assign the class properties in the constructor
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
}
