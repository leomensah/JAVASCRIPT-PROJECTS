const getSleepHours = day => {
    switch(day){
      case 'monday':
        return 8;
        break;
      case 'Tuesday':
        return 7;
        break;
      case 'Wednesday':
        return 6;
        break;
      case 'Thursday':
        return 9;
        break;
      case 'Friday':
        return 7;
        break;
      case 'saturday':
        return 4;
        break;
      default:
        return 5;
        break;
    }
  }
  
  // console.log(getSleepHours('monday'))
  // console.log(getSleepHours('Tuesday'))
  // console.log(getSleepHours('Wednesday'))
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('saturday') + getSleepHours('sunday')
  
  
  const getIdealSleepHours = () => {
    const idealHours = 7
    return idealHours * 7;
  }
  
  // console.log(getActualSleepHours())
  // console.log(getIdealSleepHours())
  
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      console.log('Perfect amount of sleep')
    } else if (actualSleepHours > idealSleepHours){
      console.log(`Congratulations, you got ${idealSleepHours - actualSleepHours} more sleep than expected!`)
    } else if (actualSleepHours < idealSleepHours){
      console.log(`You got ${idealSleepHours - actualSleepHours} hours less than you needed this week. Please get some sleep this time!`)
    }
  }
  
  calculateSleepDebt()  