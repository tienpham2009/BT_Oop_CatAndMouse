class Mouse{
    constructor(name,speed,weight,boolean) {
        this.name = name;
        this.speed = speed;
        this.weight = weight;
        this.status = boolean;
    }

    getName(){
        return this.name;
    }

    getSpeed(){
        return this.speed;
    }

    setSpeed(speed){
        this.speed = speed
    }

    getStatus(){
        return this.status;
    }

    getWeight(){
        return this.weight;
    }

    setStatus(boolean){
        this.status = boolean;
    }

    say(){
        if (status === true){
            alert('Mouse : Chit chit');
        }
    }
}