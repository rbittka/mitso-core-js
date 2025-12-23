class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
  
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
  
  toString() {
    return `Rectangle[width=${this.width},height=${this.height}]`;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  
  toString() {
    return `Circle[radius=${this.radius}]`;
  }
}

class Staff {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  
  introduce() {
    return `Hello, my name is ${this.name}, I'm ${this.age} years old, and I work as a ${this.position}.`;
  }
}

class Manager extends Staff {
  constructor(name, age) {
    super(name, age, 'manager');
  }
  
  introduce() {
    return super.introduce() + ' How can I help you?';
  }
}

class Waiter extends Staff {
  constructor(name, age) {
    super(name, age, 'waiter');
  }
  
  introduce() {
    return super.introduce() + ' What would you like to order?';
  }
}

class Cook extends Staff {
  constructor(name, age) {
    super(name, age, 'cook');
  }
  
  introduce() {
    return super.introduce() + ' I will prepare your meal.';
  }
}

class Developer {
  constructor(name, age, skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
  }
  
  introduce() {
    return `Hello, my name is ${this.name}, I'm ${this.age} years old, and I'm a developer.`;
  }
  
  isSkilledIn(skill) {
    return this.skills.includes(skill);
  }
}

class FrontendDeveloper extends Developer {
  constructor(name, age, skills) {
    super(name, age, skills);
  }
  
  introduce() {
    return super.introduce() + ' I specialize in frontend development.';
  }
  
  buildWebsite(backendApi) {
    return `Building a website using ${backendApi}`;
  }
}

class BackendDeveloper extends Developer {
  constructor(name, age, skills) {
    super(name, age, skills);
  }
  
  introduce() {
    return super.introduce() + ' I specialize in backend development.';
  }
  
  buildApi(database) {
    return `Building an API using ${database}`;
  }
}

class FullStackDeveloper extends FrontendDeveloper {
  constructor(name, age, skills) {
    super(name, age, skills);
  }
  
  introduce() {
    return `Hello, my name is ${this.name}, I'm ${this.age} years old, and I'm a full-stack developer.`;
  }
  
  deployProject(frontend, backend, database) {
    return `Deploying project with ${frontend}, ${backend}, and ${database}`;
  }
}
