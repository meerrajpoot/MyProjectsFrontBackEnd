function CreatePerson() {
    
    return{
        name: 'name',
        age : 'age',
        occupation:'occupation',
        intro:function () {
            console.log(`hi i am ${this.name} and i am ${this.age} and i am a ${this.occupation}`)
        }
    }
}

let person = CreatePerson('jhon' , 20 , 'Hunter');
person.intro();
