const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
      // Setting up getters
      get appetizers(){
        return this._courses.appetizers;
      },
      get mains(){
        return this._courses.mains;
      },
      get desserts (){
        return this._courses.desserts;
      },
      // Setting up the setters
      set appetizers(value){
        this._courses.appetizers = value;
      },
        set mains(value){
        this._courses.mains = value;
      },
        set desserts(value){
        this._courses.desserts = value;
      },
      get courses (){
        return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts
        }
      },
      addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
          name: dishName,
          price: dishPrice
        };
        this._courses[courseName].push(dish)
      },
      getRandomDishFromCourse (courseName){
        const dishes = this._courses[courseName]
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
      },
      generateRandomMeal () {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `You ordered for ${appetizer.name}, ${main.name} and ${dessert.name}, which will cost you ${totalPrice} Ghana Cedis`;
      }
  };
  
  // Generate Appetizers
  menu.addDishToCourse('appetizers', 'Pizza', 70.00);
  menu.addDishToCourse('appetizers', 'Burger', 25.00);
  menu.addDishToCourse('appetizers', 'Fries', 15.00);
  
  // Generate Mains
  menu.addDishToCourse('mains', 'Waakye', 20.00);
  menu.addDishToCourse('mains', 'Ampesi', 25.00);
  menu.addDishToCourse('mains', 'Banku', 15.00);
  
  // Generate desserts
  menu.addDishToCourse('desserts', 'ice cream', 4.50);
  menu.addDishToCourse('desserts', 'orange juice', 5.00);
  menu.addDishToCourse('desserts', 'Brukina', 3.50);
  
  const today_meal = menu.generateRandomMeal();
  console.log(today_meal);  