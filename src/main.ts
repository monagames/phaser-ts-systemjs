import Phaser from "phaser";

class Test extends Phaser.State {
    create() {
        console.log("Started");
    }
}

function start() {
    let game = new Phaser.Game(800, 600);
    game.state.add('State', Test);
    game.state.start('State');
}

if (document.readyState === "complete") {
    start();
}
else {
    window.onload = start;
}