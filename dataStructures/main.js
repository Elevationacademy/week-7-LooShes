//ex1
class UniqueArray {
    constructor() {
        this.array = {}
    }

    add(item) {
        if (!this.array[item]) {
            this.array[item] = item
        }
    }

    showAll() {
        console.log(Object.values(this.array))
    }

    exists(item) {
        if (this.array[item]) {
            return true
        } else {
            return false
        }
    }

    get(index) {
        let values = Object.values(this.array)
        if (values[index]) {
            return values[index]
        } else {
            return -1
        }
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
let isExist = uniqueStuff.exists("toy") //returns true
console.log(isExist)
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
uniqueStuff.showAll()
console.log(uniqueStuff.get(2)) //prints "hydrogen"