const readline = require('readline');
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

line.question("Wie lautet der Titel?\n", function (title) {
    if (title.length === 0) {
        console.log("Du musst einen Titel angeben!\n");
        process.exit(0);
    } else {
        line.question("Wie heißt die Bild Datei auf dem Server?\n", function (imageName) {
            if (imageName.length === 0) {
                console.log("Du musst einen Bild Namen angeben!\n");
                process.exit(0);
            } else {
                if (!imageName.endsWith(".png")) {
                    imageName = imageName + ".png"
                }
                line.question("Wie lautet der Text?\n", function (text) {
                    if (text.length === 0) {
                        console.log("Du musst einen Text angeben!\n");
                        process.exit(0);
                    } else {
                        console.log("Erstelle JSON Post...");
                        console.log("{\n  \"title\":\"" + title + "\",\n  \"thumbnail_url\":\"https://buw-api.thelecrafter.dev/thumbnails/" + imageName + "\",\n  \"text\":\"" + text + "\"\n}");
                        process.exit(0);
                    }
                });
            }
        });
    }
});

line.on("close", function () {
    console.log("\nSchließe Programm...");
    process.exit(0);
});