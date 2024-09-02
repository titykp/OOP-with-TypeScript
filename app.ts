class User {
  //property
  //public
  // name:string

  //protected
  _name: string;
  //private
  #password: number;

  //static property
  // static database: User[] = [];

  //parameter contructor
  constructor(name: string, password: number) {
    this._name = name;
    this.#password = password;
  }

  //method
  showDetails() {
    console.log(`User: ${this._name} , Password: ${this.#password}`);
  }

  //static method
  // static addUser(newUser: User) {
  //   this.database.push(newUser);
  // }

  //setter
  // setName(newName: string) {
  //   this.name = newName;
  // }
  // setPassword(newPassword: number) {
  //   this.#password = newPassword;
  // }
  //getter
  // getName() {
  //   return this.name;
  // }
  // getPassword() {
  //   return this.#password;
  // }

  //Accessor
  set Name(newName: string) {
    this._name = newName;
  }
  set Password(newPassword: number) {
    this.#password = newPassword;
  }

  get Name() {
    return this._name;
  }
  get Password() {
    return this.#password;
  }
}
class Teacher extends User {
  subject: string;
  constructor(name: string, password: number, subject: string) {
    super(name, password); //contructor แม่
    this.subject = subject;
  }
  showDetails() {
    console.log(`ฉันชื่อ ${this._name} เป็นครูสอนวิชา ${this.subject}`);
  }
}
class Student extends User {
  score: number;
  constructor(name: string, password: number, score: number) {
    super(name, password); //contructor แม่
    this.score = score;
  }
  showDetails() {
    console.log(
      `ฉันชื่อ ${this._name} เป็นนักเรียนสอบได้คะแนน ${this.score} คะแนน`
    );
  }
}

const teacher1 = new Teacher("ploy", 1234, "programing");
teacher1.showDetails();
const student1 = new Student("TY", 123456, 100);
student1.showDetails();
// static property
// const user1 = new User("ty", 123);
// const user2 = new User("ploy", 1234);

// User.addUser(user1);
// User.addUser(user2);

// User.database.forEach((user) => {
//   user.showDetails();
// });

// for (user of User.database) {
//   user1.showDetails();
// }
