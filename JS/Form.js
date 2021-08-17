class Form {
    constructor() {
        // this.input = createInput("Name");
        this.input = createInput("").attribute("placeholder", "Name");

        this.button = createButton("Play");
        this.greeting = createElement("h2");
    }

    hide() {
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display() {

        var title = createElement('h1');
        title.html("carRacing game");
        title.position(displayWidth - 90, 100);

        // var input = createInput("Name");
        // var button = createButton("Play");
        this.input.position(displayWidth - 60, 220);
        this.button.position(displayWidth, 300);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.updateCount(playerCount);

            player.index = playerCount;
            player.update();

            // var greeting = createElement("h2");
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth - 40, 250);

        })

    }
}