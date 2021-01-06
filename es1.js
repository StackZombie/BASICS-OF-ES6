let person ={
    name:"khurram",
    degree:"BSCS",
    cgpa:"3.17",
    semester:"8"
}


console.log("Person",person)

const PERSON={...person}
console.log("PERSON",PERSON)


person=null

console.log("Person",person)
console.log("PERSON",PERSON)

//lets create a const object and see if the property of an object is immutable or not ?

const PERSON_NEW = {...PERSON}

console.log("Person New",PERSON_NEW)
// after changing cgpa
PERSON_NEW.cgpa="4"
console.log("After Changing Person cgpa",PERSON_NEW)
// hence property of an object are still mutable no matter the object is make const unless resassigning the whole object
// now lets freeze the property change privelege of an object
const PERSON_FREEZE = Object.freeze({name:"Khurram",cgpa:"3.1",degree:"BSCS",semester:"8"})

console.log("Frozen Object ",PERSON_FREEZE)
//change the value of its property
PERSON_FREEZE.cgpa = "3.18" // it won't let it be changed
console.log("Person Freeze",PERSON_FREEZE)  // print the object as it was initialized 


// lets make the whole object frozen based  on the condition
// if the object reaches the semester 8 it would let it be frozen

const SEMESTER=[1,2,3,4,5,6,7,8]
const CGPA =[3.1,3.2,3.5,3.2,3.5,2.9,3.1,4.0]

const STUDENT_RECORD = {
    name:"Khurram",
    semester:null,
    cgpa:null,
}

//run a loop
for(let i =0;i<8;++i){
    STUDENT_RECORD.semester=SEMESTER[i]
    STUDENT_RECORD.cgpa=CGPA[i]
    console.log("STUDENT RECORD ON SEMESTER "+ (i+1))
    console.table(STUDENT_RECORD)

    if(SEMESTER[i] === 8)
        Object.freeze(STUDENT_RECORD) // record won't be changed afterward
}

// now lets try to change the semester property of STUDENT_RECORD object

STUDENT_RECORD.semester=9
//now lets print
console.log("After trying to change the semester property of frozen object")
console.table(STUDENT_RECORD)// it wont be changed and print the previous one as it is frozen

