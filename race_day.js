let raceNumber = Math.floor(Math.random() * 1000);

// Varible for whether runner registered or not
let runnerRegisteredEarly = true;

// set variable for runner's age
let runnersAge = 18;

// Create a control flow statement that checks whether the runner is an adult
// AND registered early. Add 1000 to their raceNumber if this is true.

if (runnersAge > 18 && runnerRegisteredEarly) {
  raceNumber += 1000;
}

//Step 5
//Create a separate control flow statement below the first (starting with if again). This //statement will check age and registration time to determine race time.

if (runnersAge > 18 && runnerRegisteredEarly) {
  console.log(`The race starts at 9:30 and your race number is ${raceNumber}`);
} else if (runnersAge > 18 && (!runnerRegisteredEarly)){
  console.log(`The starts at 11:00 am and your race number is ${raceNumber}`);
} else if ( runnersAge < 18) {
  console.log(`Race number ${raceNumber} will race at 12:30 pm`);
} else {
  console.log(`Please race number ${raceNumber} should see the registration desk`)
}



