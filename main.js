class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + ` (${this.studentRole})`);
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

class LearningPath{
    constructor({
        name,
        courses=[],
    }){
        this.name=name;
        this.courses= courses;
    }
}
class Courses{
    constructor({
        name,
        classes =[],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        if(nuevoNombre === "Curso Malito de programacion basica"){
            console.error("Web... no")
        }else{
            this._name = nuevoNombre;
        }
    }
}

function videoPlay(id){
    const urlSecreta = "https://platziultrasecreto.com"+ id;
    console.log("Se esta reproduciendo desde la url "+ urlSecreta)
}
function videoStop(id){
    const urlSecreta = "https://platziultrasecreto.com"+ id;
    console.log("Pausamos la url "+ urlSecreta)
}
class Clases{
    constructor({
        name,
        videoID,
        comments = [],
    }){
        this.name = name;
        this.comments = comments;
        this.videoID = videoID
    }

    reproducir(){
        videoPlay(this.videoID)
    }
    pausar(){
        videoStop(this.videoID)
    }
}

//Escuela web
const claseIntroCSSGrid = new Clases({
    name: "Intro a CSS Grid",
})
const claseIntroCSSFlexBox = new Clases({
    name: "Intro a CSS FlexBox",
})
const css = new Courses({
    name: "Curso Introducctorio a CSS",
    classes :[claseIntroCSSFlexBox,claseIntroCSSGrid],
    isFree : true
})
const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo Web",
    courses: [css]
})
// Escuela de data
const tableou1 = new Clases({
    name: "Clase intro de Tableau",
})
const tableou2 = new Clases({
    name: "Clase Avanzada de Tableau",
})
const data1 = new Clases({
    name: "Clase intro de data Science",
})
const tableuCourse = new Courses({
    name: "Curso de tableu",
    classes:[tableou1, tableou2]
})
const dataScience = new Courses({
    name: "Curso de Visualizacion de Data",
    classes:[data1],
    lang: "english"
})
const escuelaData = new LearningPath({
    name: "Escuela de Data Engineering",
    courses: [tableuCourse, dataScience]
})
// Escuela de videojuegos

const clase1Unreal = new Clases({
    name: "Bienvenido al curso",
})
const clase2Unreal = new Clases({
    name: "Prework para trabajar con unreal engine",
})
const unreal = new Courses({
    name: "Curso de Unreal Engine",
    classes:[clase1Unreal, clase2Unreal]
})
const escuelaVg = new LearningPath({
    name: "Escuela de Videojuegos",
    courses:[unreal]
})





class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName : this.name,
        })
        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, "+ this.name+", solo puedes tomar cusos gratis");
        }
    }
}
class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, "+ this.name+", no puedes tomar cusos en ingles");
        }
    }
}
class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName : this.name,
            studentRole : "profesor",
        })
        comment.publicar();
    }
}









const juan = new FreeStudent({
    name: "JuanDc",
    username: "juandc",
    email: "juanito@emanil.com",
    twitter: "fjuandc",
    learningPaths: [escuelaWeb, escuelaVg],
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@emanil.com",
    instagram: "miguelito_feliz",
    learningPaths:[escuelaData,escuelaWeb],
});

const freddy = new TeacherStudent({
    name: "Fredy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddier",
});