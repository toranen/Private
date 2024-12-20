"use strict";
import { initPrintOut, printOut } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

//-----------------------------------

class gameStore {
    #game
    #shelf
    #price
    #multiplayer

    static gameShelf = {
        RocketLeague: {price: "$50", name: "Rocket League", multiplayer: true},
        Fortnite: {price: "$0", name: "Fortnite", multiplayer: true},
        Minecraft: {price: "$30", name: "Minecraft", multiplayer: true},
        Terraria: {price: "$29", name: "Terraria", multiplayer: true},
        Xcom2: {price: "$50", name: "Xcom2", multiplayer: false},
        list: ["RocketLeague", "Fortnite", "Minecraft", "Terraria", "Xcom2"],
    }

    constructor (game, gameShelf, price, multiplayer){
        this.#game = game || 0;
        this.#shelf = gameShelf;
        this.#price = price || 0;
        this.#multiplayer = multiplayer || 0;
    }

    toString(){
        if (this.#multiplayer == true){
            this.#multiplayer = "multiplayer";
        } else {
            this.#multiplayer = "singleplayer";
        }
        printOut(`The Game "${this.#shelf.name}" costs ${this.#shelf.price}, and is ${this.#multiplayer}.`);
        printOut("\n");
        console.log(`The Game "${this.#shelf.name}" costs ${this.#shelf.price}, and is ${this.#multiplayer}.`);
    }

    toPrint(){
        if (this.#multiplayer == true){
            this.#multiplayer = "multiplayer";
        } else if (this.#multiplayer == false){
            this.#multiplayer = "singleplayer";
        } 
        printOut(`The Game "${this.#shelf.name}" costs ${this.#shelf.price}, and is ${this.#multiplayer}.`);
        printOut("\n");
        console.log(`The Game "${this.#shelf.name}" costs ${this.#shelf.price}, and is ${this.#multiplayer}.`);
    }

    selectGame(shelf){
        switch (shelf){
            case "RocketLeague": {
                const newGame = gameStore.gameShelf[shelf];
                this.#shelf = newGame
                this.#multiplayer = this.#shelf.multiplayer;
                return this.toString(this.#shelf);
            }
            case "Fortnite":{
                const newGame = gameStore.gameShelf[shelf];
                this.#shelf = newGame
                this.#multiplayer = this.#shelf.multiplayer;
                return this.toString(this.#shelf);
            }
            case "Minecraft":{
                const newGame = gameStore.gameShelf[shelf];
                this.#shelf = newGame
                this.#multiplayer = this.#shelf.multiplayer;
                return this.toString(this.#shelf);
            }
        }
    }

    runThrough(count){
        const gameLoop = gameStore.gameShelf["list"];
        
        while (count < gameLoop.length){
            const newGame = gameLoop[count];
            const shelf = gameStore.gameShelf[newGame];
            this.#shelf = shelf;
            this.#multiplayer = this.#shelf.multiplayer;
            count++;
            this.toPrint(this.#shelf);
        }
    }
}

const gameCheck = new gameStore();
gameCheck.runThrough(0)