//ex1
printStars = num => {
    let stars=`*`, j

    for (let i = 1; i < num + 1; i++) {
        j = i
        while (j) {
            console.log(stars)
            stars += `*`
            j = 0
        }
    }
}

printStars(5)