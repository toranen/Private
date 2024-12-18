"use strict";

import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

//----testing-----------------------------------------------------------------------

class gameInfo {
    
    #game
    #release
    #releasedAgo
    #publisher
    #platform
    #multiplayer

    constructor (game, release, releasedAgo, publisher, platform, multiplayer){
        this.#game = game || 0;
        this.#release = release || 0;
        this.#releasedAgo = releasedAgo || 0;
        this.#publisher = publisher || 0;
        this.#platform = platform || 0;
        this.#multiplayer = multiplayer || 0;
    }

    game(game) {
        switch (game) {
            case "Fortnite": {
                this.#game = `${game}`;
                this.#release = new Date(2017, 6, 21);
                this.#releasedAgo = Math.floor((new Date() - this.#release) / (1000 * 60 * 60 * 24));
                this.#release = this.#release.toISOString().split('T')[0];
                this.#publisher = `'Epic Games' and 'People Can Fly'`;
                this.#platform = `'PlayStation 5/4', 'Xbox Series X/S/One/One X/One S', 'Nintendo Switch', 'PC', 'Android', 'iPhone' and 'iPad'`;
                this.#multiplayer = true
                return this.toString(this.#game, this.#release, this.#releasedAgo, this.#publisher, this.#platform, this.#multiplayer);
            }
            case "Rocket League": {
                this.#game = `${game}`;
                this.#release = new Date(2015, 6, 7);
                this.#releasedAgo = Math.floor((new Date() - this.#release) / (1000 * 60 * 60 * 24));
                this.#release = this.#release.toISOString().split('T')[0];
                this.#publisher = `Psyonix`;
                this.#platform = `'Nintendo Switch', 'PlayStation 4', 'Xbox One', 'GeForce Now', 'Microsoft Windows', 'Linux' and 'Mac Operating Systems'`;
                this.#multiplayer = true
                return this.toString(this.#game, this.#release, this.#releasedAgo, this.#publisher, this.#platform, this.#multiplayer);
            }
            case "XCOM 2": {
                this.#game = `${game}`;
                this.#release = new Date(2016, 1, 5);
                this.#releasedAgo = Math.floor((new Date() - this.#release) / (1000 * 60 * 60 * 24));
                this.#release = this.#release.toISOString().split('T')[0];
                this.#publisher = `'Firaxis Games', 'Feral Interactive' and 'The Workshop Entertainment, Inc'`;
                this.#platform = `'Nintendo Switch', 'PlayStation 4', 'Xbox One', 'Microsoft Windows', 'Linux', 'Mac Operating Systems', 'Classic Mac OS' and 'Android'`;
                this.#multiplayer = false
                return this.toString(this.#game, this.#release, this.#releasedAgo, this.#publisher, this.#platform, this.#multiplayer);
            }
        }
    }

    toString() {
        if (this.#multiplayer == true){
            this.#multiplayer = `Multiplayer`;
        } else {
            this.#multiplayer = `Singleplayer`
        }

        printOut(`The game ${this.#game} was released ${this.#release} (${this.#releasedAgo} days ago). ${this.#game} was developed by ${this.#publisher}. ${this.#game} is available on ${this.#platform}. ${this.#game} is ${this.#multiplayer}.`);
        printOut(newLine);
    }
}

const gameCheck = new gameInfo();

gameCheck.game("Rocket League");
gameCheck.game("Fortnite");
gameCheck.game("XCOM 2");