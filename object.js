var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "czerwony",
    passengers: 2,
    convertible: false,
    milage: 1021,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " robi: Brum wrrrr!");
        } else {
            alert("Najpierw musisz włączyć silnik.");
        }
    }
};

var cadi = {
    make: "Cadi",
    model: "GM",
    year: 1955,
    color: "jasnobrązowy",
    passengers: 5,
    convertible: false,
    milage: 12892,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " robi: Brum wrrrr!");
        } else {
            alert("Najpierw musisz włączyć silnik.");
        }
    }
};
var taxi = {
    make: "SieMoCorp",
    model: "Taxi",
    year: 1955,
    color: "żółty",
    passengers: 4,
    convetible: false,
    milage: 281341,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " robi: Brum wrrrr!");
        } else {
            alert("Najpierw musisz włączyć silnik.");
        }
    }
};
var fiat = {
        make: "Fiat",
        model: "500",
        year: 1957,
        color: "szaroniebieski",
        passengers: 2,
        convertible: false,
        milage: 88000,
        started: false,
        fuel: 0,
        start: function() {

                if (this.fuel == 0) {
                    alert("bak jest pusty, zatankuj przed jazdą");
                } else {
                    this.started = true;
                }
        },
        stop: function() {
            this.started = false;
        },
        drive: function() {
            if (this.started) {

                if (this.fuel > 0) {
                    alert(this.make + " " + this.model + " robi: brum wrrr!");
                    this.fuel = this.fuel - 1;
                } else {
                    alert("Osz..., brak paliwa.");
                    this.stop();
                }
        } else {
            alert("Najpierw musisz włączyć silnik.");
        }
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};
        // cadi.start();
        // cadi.drive();
        // cadi.stop();
        //
        // chevy.drive();
        // chevy.start();
        // chevy.drive();
        // chevy.stop();
        //
        // taxi.drive();
        // taxi.start();
        // taxi.drive();
        // taxi.stop();

        fiat.start();
        fiat.drive();
        fiat.addFuel(2);
        fiat.start();
        fiat.drive();
        fiat.drive();
        fiat.drive();
        fiat.stop();
