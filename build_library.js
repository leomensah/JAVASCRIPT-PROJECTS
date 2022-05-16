class Media {
    constructor(title){
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
  
    get title(){
      return this._title;
    }
  
    get ratings(){
      return this._ratings;
    }
  
    get isCheckedOut (){
      return this._isCheckedOut;
    }
  
    toggleCheckOutStatus () {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating (rating) {
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthOfArray = this.ratings.length;
      return ratingsSum / lengthOfArray
    }
  
    addRating (rate_arg){
      this.ratings.push(rate_arg)
    }
  
    set isCheckedOut (checkout){
      this._isCheckedOut = checkout;
    }
  }
  
  
  class Book extends Media {
    constructor(author, title, pages){
      super(title)
      this._author = author;
      this._pages = pages;
    }
  
    get author(){
      return this._author;
    }
  
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._pages;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut)
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(6);
  
  console.log(historyOfEverything.getAverageRating())
  
  speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut)
  
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating())
    