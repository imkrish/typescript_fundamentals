namespace classes {

    // Class

    class Person {

        name: string  // Default is public
        private type: string
        protected age: number

        constructor(name: string, type: string, age: number, public username: string) {
            // Note: public username: string
            this.name = name
            this.age = age
            this.type = type
        }

        printAge() {
            console.log(this.age)
        }

        // methods can also be private or protected

        setType(type: string) {
            this.type = type
        }

        getType() {
            return this.type
        }
    }

    const krish = new Person('Krish', 'Person', 25, 'imKrish')
    krish.name = 'Keerati'
    krish.username = 'xzodear'
    krish.printAge()
    krish.setType('Amazing')
    console.log(krish)
    console.log(krish.getType())

    // Inheritance
    class Developer extends Person {

        constructor(name: string, age: number, username: string) {
            super(name, 'Developer', age, username)
            this.age = 24  // cannot access to this.type
        }
    }

    // const krishDev = new Developer('Krish', 'Person', 25, 'imKrish') // before having constructor
    // console.log(krishDev)  // Get type 'Developer' ??
    const krishDev = new Developer('Krish', 25, 'imKrish')
    console.log(krishDev)



    // Getters & Setters
    class Plant {

        private _species: string = 'Default'

        get species(): string {
            return 'Hi ' + this._species
        }

        set species(value: string) {
            if (value.length > 3) {
                this._species = value
            } else {
                this._species = 'Default'
            }
        }
    }

    const plant = new Plant()
    console.log(plant.species)
    plant.species = 'ha'  // become an argument of set species()
    console.log(plant.species)
    plant.species = 'Homosapien'  // become an argument of set species()
    console.log(plant.species)

    // Static Properties & Methods
    class Helpers {

        static readonly PI: number = 3.14  // Note: readonly > cannot change the value of PI
        static calCircumference(diameter: number): number {
            return this.PI * diameter
        }
    }

    // Helpers.PI = 5
    console.log(Helpers.PI)
    console.log(Helpers.calCircumference(5))

    // Abstract Classes & Methods -> cannot be instantiated
    abstract class Project {

        projectName: string = 'Default'
        budget: number

        abstract printName(): void

        calcBudget() {
            return this.budget * 2
        }
    }

    // const project = new Project()

    class ITProject extends Project {

        constructor(projectName: string) {
            super()
            this.projectName = projectName
        }

        printName() {  // Have to implement this abstract method
            console.log(this.projectName)
        }
    }

    const itProject = new ITProject('IT Project')
    itProject.printName()

    // private constructors
    class OnlyOne {  // Singleton

        private static instance: OnlyOne

        private constructor(public readonly name: string) {}  // Note: readonly

        static getInstance(): OnlyOne {
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne('Singleton')
            }
            return OnlyOne.instance
        }
    }
    
    const singleton = OnlyOne.getInstance()
    console.log(singleton)
    console.log(singleton.name)
    // singleton.name = 'something else' // Error because of readonly 
    console.log(singleton)
}