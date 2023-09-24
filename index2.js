function speedDetector(speedInput){
    const speedLimit = 70;
    if (speedInpuy <=speedLimit){
        console.log("ok");
    }
    else if (speedInput >speedLimit){
        const excessSpeed =speedInput - speedLimit;
        const points = excessSpeed/5;
        if (points > 12){
            console.log('License suspended!!');
        }
        else {
            console.log(`Points:${points}`);
        }

    }
    else {
        console.log('Warning: Please input a numbers');
    }
}
