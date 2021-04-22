class Cat {
    constructor(name, speed, weight, boolean) {
        this.name = name;
        this.speed = speed;
        this.weight = weight;
        this.status = boolean;
    }

    say() {
        if (status === true) {
            alert('Cat: meo meo');
        }
    }

    getStatus(){
        return this.status;
    }

    getWeight(){
        return this.weight;
    }

    catchMouse(mouse) {
        if (this.status === true) {
            if (this.speed > mouse.getSpeed()) {
               console.log('meo da bat duoc chuot')
            } else {
               console.log('meo khong duoi duoc chuot');
            }
        }
    }

    eatMouse(mouse) {
        if (this.status === true) {
            if (mouse.getStatus()) {
                mouse.say();
                this.weight += mouse.getWeight();
                return this.weight;

            } else {
                alert('meo khong an chuot chet');
            }
        }
    }
}