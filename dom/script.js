// this is the where makes the text come on the screen and link it to our documentr
document.addEventListener('DOMContentLoaded', function () {
    let paragraph = document.createElement('p');
    let text = document.createTextNode('DOM DOM DOMMMMM');
// this is our styling for our text on the screen
    paragraph.style.color = 'black';
    paragraph.style.textTransform = 'uppercase';
    paragraph.className = 'some-paragraph';
//this is what makes DOM DOM DOMMMM appear omn the screen
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
// this section makes our button and the text and color that goes along with it
    let button = document.createElement('button');
    let btnText = document.createTextNode('ADD SQUARE');
    button.appendChild(btnText);
    document.body.appendChild(button);
// this section is what makes the boxes appear on the screen by making them divs
    let boxContainer = document.createElement('div');
    document.body.appendChild(boxContainer);
    boxContainer.className = 'box-container';
    button.style.backgroundColor = '#0091ea'

    let counter = 1
// this is how we get the boxes to appear on the screen
    button.addEventListener('click', function () {

        let box = document.createElement('div');
        boxContainer.appendChild(box);
// the className is how we pull the style from out CSS document
        box.className = 'box';

        let boxText = document.createTextNode(counter);
//when the curser is on the box but not clicked it will display it id number 
        box.addEventListener('mouseover', function () {
            box.appendChild(boxText);
        })
// to remove the number out of the box when the curser is off of it
        box.addEventListener('mouseout', function () {
            box.removeChild(boxText);
        })
// how the functions know what number to show on the box
        box.id = counter
        counter = counter + 1 // counter++
// this lets the code pick a color out of thr aray to make the box when single clicked
        box.addEventListener('click', function () {
            let boxColor = ['red', 'yellow', 'pink', 'green', 'purple']
            let randomIndex = (Math.floor(Math.random() * boxColor.length))
            console.log(boxColor[randomIndex])
            box.style.backgroundColor = boxColor[randomIndex]
        })
//this tells the code when double clicked to choose if its even to remove the one in front of the box you clicked on 
//or if its odd to remove the one behind the one you clicked on
        box.addEventListener("dblclick", function () {
            if (box.id % 2 === 0) {
                if (box.nextSibling === null) {
                    console.log('there is nothing ')
                } else {
                    boxContainer.removeChild(box.nextSibling)
                }
            } else {
                if (box.previousSibling === null) {
                    console.log('there is no one back here')
                } else {
                    boxContainer.removeChild(box.previousSibling)

                }
            }
        })



    })
})
