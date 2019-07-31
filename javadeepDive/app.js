var friendsAray = [
    'Dalton',
    'John',
    'T-Money',
    'Jacob',
    'Dat Alien From Area 51']

var placesAray = [
    'The Baar',
    'The Kountry Club',
    'The Yerd',
    'The Baffroom',
    'The Garage',
    'The Ruuf',
    'The Poul',
    'The Livin Room',
    'The Office',
    'The Studio'
]

var weaponsAray = [
    'Da Gun',
    'Da Plate',
    'Da Moken Troll',
    'Da Pilla',
    'Da Stenchen Cord',
    'Da Wamma Sheen',
    'Da Toylatisha',
    'A bunch of Muskidas',
    'A Loominum Foil Ball',
    'A Hummer Fifty Mall Nair Baseball',
    'A bag of Quatas form Da Lawn-Da-Mat',
    'Da San-E-Claws Hat',
    'Da Licka Bottle',
    'Da Potata',
]

for (var i = 0; i < 100; i++) {
    alertMaker(i)
}
function alertMaker(num) {
    var h3 = $('<h3>accuseation' + num + '</h3>')
    $('body').append(h3)
    h3.click(function () {
        let friend = friendsAray[num % friendsAray.length]
        let weapon = weaponsAray[num % weaponsAray.length]
        let place = placesAray[num % placesAray.length]
        console.log(num)
        console.log('I Accuse ' + friend + ' killed him with ' + weapon + ' in ' + place)
    })
}