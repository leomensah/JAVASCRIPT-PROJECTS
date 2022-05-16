const team = {
    _players: [
      {
        firstName: 'Simon',
        lastName: 'Nsiah',
        age: 26
      },
      {
        firstName: 'John',
        lastName: 'Andre',
        age: 25
      },
      {
        firstName: 'Leonard',
        lastName: 'Mensah',
        age: 24
      }
    ],
    _games: [
      {
        opponent: 'NCC',
        teamPoints: 45,
        opponentPoints: 28
      },
      {
        opponent: 'Juventus',
        teamPoints: 35,
        opponentPoints: 16
      },
      {
        opponent: 'Barcelona',
        teamPoints: 23,
        opponentPoints: 32
      },
    ],
      get players(){
        return this._players;
      },
      get games(){
        return this._games;
      },
      addPlayer (firstName, lastName, age){
        let player = {
          firstName: firstName,
          lastName: lastName,
          age: age
        };
        this.players.push(player);
      },
        addGame (opponent, teamPoints, opponentPoints){
        let game = {
          opponent: opponent,
          teamPoints: teamPoints,
          opponentPoints: opponentPoints
        };
        this.games.push(game);
      }
  }
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players)
  
  
  team.addGame('Kotoko', 200, 67);
  team.addGame('Hearts Of Oak', 45, 89);
  team.addGame('Aduana', 32, 76);
  
  console.log(team.games);
  
  
  