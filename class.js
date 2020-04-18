class Student{
    constructor(sId, sName){
        this.id =  sId;
        this.name = sName;
        this.school = "Kolimunnesa School";
    }
}

const student1 = new Student(11, "Shuvo");
const student2 = new Student(10, "Mahi");

console.log(student1, student2);
console.log(student1.name, student2.name);