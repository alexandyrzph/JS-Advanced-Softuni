function speedRestriction(speed, area) {

    let restriction = 0;
    let status = '';
    let difference = 0;
    switch (area) {
        case 'motorway':
            restriction = 130;
            difference = speed - restriction;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else if (difference > 40) {
                status = 'reckless driving';
            }

            if (speed > restriction) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${restriction} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${restriction} zone`);
            }
            break;
        case 'interstate':
            restriction = 90;
            difference = speed - restriction;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else if (difference > 40) {
                status = 'reckless driving';
            }

            if (speed > restriction) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${restriction} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${restriction} zone`);
            }
            break;
        case 'city':
            restriction = 50;
            difference = speed - restriction;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else if (difference > 40) {
                status = 'reckless driving';
            }

            if (speed > restriction) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${restriction} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${restriction} zone`);
            }
            break;
        case 'residential':
            restriction = 20;
            difference = speed - restriction;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else if (difference > 40) {
                status = 'reckless driving';
            }

            if (speed > restriction) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${restriction} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${restriction} zone`);
            }
            break
    }
}
speedRestriction(40, 'city');
speedRestriction(21, 'residential');
speedRestriction(120, 'interstate');
speedRestriction(200, 'motorway');