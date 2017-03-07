function VehicleConstructor(name, wheels, pass, speed){
    var distance_travelled = 0;
    var updateDistanceTravelled = function(){
        distance_travelled += speed;
    }

    this.name = name;
    this.wheels = wheels;
    this.passengers = pass;
    this.speed = speed;

    this.getDist = function(){
        console.log(distance_travelled);
    };

    this.setDist = function(){
        updateDistanceTravelled();
    }
}

VehicleConstructor.prototype.makeNoise = function(){
    console.log("BeeBeeeeeep");
}

VehicleConstructor.prototype.move = function(){
    this.setDist();
    this.makeNoise();
}

VehicleConstructor.prototype.checkMiles = function(){
    this.getDist()
}

var vw = new VehicleConstructor("Slug Bug", 5, 13, 55);

vw.makeNoise();
vw.move();
console.log('lets check miles')
vw.checkMiles();