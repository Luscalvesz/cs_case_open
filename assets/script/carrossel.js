var boxes = {
    "snakebite": [
        // { "img": "Snakebite-case.png" },
        { "name": "In Living Color", "weapon": "M4A4", "rarity": "hidden", "img": "M4a4-in-living-color.png" },
        { "name": "The Traitor", "weapon": "USP-S", "rarity": "hidden", "img": "Usp-s-the-traitor.png" },
        { "name": "XOXO", "weapon": "XM1014", "rarity": "exotic", "img": "Xm1014-xoxo.png" },
        { "name": "Food Chain", "weapon": "MP9", "rarity": "exotic", "img": "Mp9-food-chain.png" },
        { "name": "Chromatic Aberration", "weapon": "Galil AR", "rarity": "exotic", "img": "Galil-ar-chromatic-aberration.png" },
        { "name": "Slate", "weapon": "AK-47", "rarity": "remarkable", "img": "Ak-47-slate.png" },
        { "name": "Trigger Discipline", "weapon": "Desert Eagle", "rarity": "remarkable", "img": "Desert-eagle-trigger-discipline.png" },
        { "name": "dev_texture", "weapon": "Negev", "rarity": "remarkable", "img": "Negev-dev-texture.png" },
        { "name": "Button Masher", "weapon": "MAC-10", "rarity": "remarkable", "img": "Mac-10-button-masher.png" },
        { "name": "Cyber Shell", "weapon": "P250", "rarity": "remarkable", "img": "P250-cyber-shell.png" },
        { "name": "Junkyard", "weapon": "R8 Revolver", "rarity": "industrial level", "img": "R8-revolver-junk-yard.png" },
        { "name": "Heavy Metal", "weapon": "SG 553", "rarity": "industrial level", "img": "Sg-553-heavy-metal.png" },
        { "name": "Oscillator", "weapon": "UMP-45", "rarity": "industrial level", "img": "Ump-45-oscillator.png" },
        { "name": "O.S.I.P.R", "weapon": "M249", "rarity": "industrial level", "img": "M249-osipr.png" },
        { "name": "Circaetus", "weapon": "CZ75-Auto", "rarity": "industrial level", "img": "Cz75-auto-circaetus.png" },
        { "name": "Clear Polymer", "weapon": "Glock-18", "rarity": "industrial level", "img": "Glock-18-clear-polymer.png" },
        { "name": "Windblown", "weapon": "Nova", "rarity": "industrial level", "img": "Nova-windblown.png" }
    ],
    "falchion": [
        // { "img": "falchion-case.png" },
        { "name": "faca caraio", "weapon": "falchion", "rarity": "hidden", "img": "falchion-knife.png" },
        { "name": "O.S.I.P.R", "weapon": "M249", "rarity": "industrial level", "img": "M249-osipr.png" },
        { "name": "O.S.I.P.R", "weapon": "M249", "rarity": "industrial level", "img": "M249-osipr.png" }

    ]
}


console.log(boxes);
// var obj = JSON.parse(boxes);
// console.log(obj);
// obj.boxes.forEach(element => {
//     console.log(element); 
//     console.log(element.name); 
// });


// var teste = boxes.snakebite[0].img
// var teste2 = boxes.falchion[0].img

// var img = document.getElementById('img')
// var img2 = document.getElementById('img2')
// var batata = document.getElementById('batata')
// img.src = './assets/imgs/snakebite/' + teste
// img2.src = './assets/imgs/falchion/' + teste2
// console.log(teste);
// console.log(teste2);


function callBox(value) {
    var batata = document.getElementById('batata')
    var resp = document.getElementById('resp')
    var itemName = document.getElementById('itemName')
    var itemImg = document.getElementById('itemImg')

    resp.innerHTML = ""

    // console.log(value);
    // if (value == "snakebite") {
    //     console.log('snakebite caraio');
    //     batata.src = `./assets/imgs/${value}/${teste}`



    // }else if (value == "falchion") {
    console.log(value);

    //     console.log('falchion caraio');
    //     batata.src = `./assets/imgs/${value}/${teste2}`

    // }

    // var test = `boxes.${value}.img`
    // var caixa = boxes + `.${value}`
    var caixa = boxes + `.${value}`
    // var caixa = boxes
    var caixateste = boxes.snakebite

    console.log(caixa, "caixa aqui");
    // console.log(boxes.falchio);
    // console.log( JSON.parse(caixa));
    caixateste.forEach(element => {
        console.log(element);
        resp.innerHTML += `
        <div class="item">
            <img id="itemImg" src="./assets/imgs/${value}/${element.img}">
            <h4 id="itemName">${element.name}</h4>
        </div>`
    });






}









$(document).ready(function () {
    $('#carousel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});