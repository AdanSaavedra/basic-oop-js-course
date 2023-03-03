const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de html y css",
        "Curso Practico de html y css"
    ],
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
};

function Student(name, age, cursoAprobado){
    this.name = name
    this.age = age
    this.cursoAprobado = cursoAprobado
    // this.aprobarCurso = function (nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito)
    // }

}

Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursoAprobado.push(nuevoCursito)
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de intro a videojuegos",
        "Curso de cracion de personajes"
    ]
);

// Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        name,
        email, 
        age , 
        cursoAprobado = [],
    }){
        this.name = name
        this.email = email
        this.age = age
        this.cursoAprobado = cursoAprobado
        // this.aprobarCurso = cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursoAprobado.push(nuevoCursito)
    }
}

const miguelito = new Student2({
    email: "Miguelito@platzi.com",
    name: "Miguel",
    age: 28,

})