class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      return this.name
    }
  
    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito !== "string") {
        console.error("error")
      } else{
        const split = nuevoNombrecito.trim().split(" ");
        const newName = split.map((p) => { return p[0].toUpperCase() + p.substring(1); }).join(" ");
        this._name = newName;
      }
    }
}
const courseName = "curso de program basico";
const nombreMAyusc = new Course({
    name: courseName,
})


// class Course {
//     constructor({
//       name,
//       classes = [],
//     }) {
//       this.name = name;
//       this.classes = classes;
//     }
  
//     get name() {
//       return this.name
//     }
  
//     set name(nuevoNombrecito) {
//       if (typeof nuevoNombrecito !== "string") {
//         console.log("error")
//       } else{
//         const split = nuevoNombrecito.trim().split(" ");
//         const newName = split.map((p) => { return p[0].toUpperCase() + p.substring(1); }).join(" ");
//         this.name = newName;
//         // const str = nuevoNombrecito
//         // const arr = str.split(" ")
//         // for (var i = 0; i < arr.length; i++){
//         //   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//         // }
//         // const str2 = arr.join(" ");
//         // this.name = str2;
//       }
//     }
//   }