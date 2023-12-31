import { IPlayer, IPlayerConfigs } from "../interfaces/player";

import { AbstractPlayerClass } from "./classes"

export abstract class AbstractPlayer<T extends AbstractPlayerClass> implements IPlayer {

    private name
    private power
    public classe
    public iventory

    constructor(configs: IPlayerConfigs<T>){
        this.classe = configs.class
        this.name = configs.name;
        this.power = configs.power;
        this.iventory = configs.iventory
    }

    attack(){
        const randomAttackRate = Math.random() * this.power;
        return randomAttackRate;
    }

    get getName(){
        return this.name
    }

    get getPower(){
        return this.power
    }

}