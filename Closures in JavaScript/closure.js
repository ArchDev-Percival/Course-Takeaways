function raiseToPower(m){
    return function (n){
        return n ** m;
    }
}

square = raiseToPower(2);
cube = raiseToPower(3);

square(5);
cube(5);