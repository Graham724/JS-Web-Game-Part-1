
// image function
function newImage (url, left, bottom) {
    let newCharacter = document.createElement('img')
    newCharacter.src = url
    newCharacter.style.position = 'fixed'
    newCharacter.style.left = left + 'px'
    newCharacter.style.bottom = bottom + 'px'
    document.body.append(newCharacter)
    return newCharacter
}

// object function
function newItem (url, left, bottom) {
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', function() {
        object.remove()
    })
}

// adding characters//
newImage ('assets/green-character.gif', 100, 100)
newImage ('assets/pine-tree.png', 450, 200)
newImage ('assets/tree.png', 200, 300)
newImage ('assets/pillar.png', 350, 100)
newImage ('assets/crate.png', 150, 200)
newImage ('assets/well.png', 500, 425)

// adding items//
newItem ('assets/sword.png', 500, 405)
newItem ('assets/sheild.png', 165, 185)
newItem ('assets/staff.png', 600, 100)