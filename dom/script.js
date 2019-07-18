document.addEventListener('DOMContentLoaded', function () {
    let paragraph = document.createElement('p');
    let text = document.createTextNode('DOM DOM DOMMMMM');

    paragraph.style.color = 'black';
    paragraph.style.textTransform = 'uppercase';
    paragraph.className = 'some-paragraph';

    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    let button = document.createElement('button');
    let btnText = document.createTextNode('ADD SQUARE');
    button.appendChild(btnText);
    document.body.appendChild(button);

    let boxContainer = document.createElement('div');
    document.body.appendChild(boxContainer);
    boxContainer.className = 'box-container';
    button.style.backgroundColor = '#0091ea'

    let counter = 1

    button.addEventListener('click', function () {

        let box = document.createElement('div');
        boxContainer.appendChild(box);
        box.className = 'box';

        let boxText = document.createTextNode(counter);

        box.addEventListener('mouseover', function () {
            box.appendChild(boxText);
        })

        box.addEventListener('mouseout', function () {
            box.removeChild(boxText);
        })

        box.id = counter
        counter = counter + 1 // counter++

        box.addEventListener('click', function () {
            let boxColor = ['red', 'yellow', 'pink', 'green', 'purple']
            let randomIndex = (Math.floor(Math.random() * boxColor.length))
            console.log(boxColor[randomIndex])
            box.style.backgroundColor = boxColor[randomIndex]
        })

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
