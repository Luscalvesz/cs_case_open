var boxes = {
    "snakebite": [
        {"key": "key.png"},
        {"boxName": "snakebite"},
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
        {"key": "key.png"},
        {"boxName": "falchion"},
        { "name": "faca caraio", "weapon": "Falchion", "rarity": "hidden", "img": "falchion-knife.png" },
        { "name": "Hyper Beast", "weapon": "Awp", "rarity": "hidden", "img": "awp-hyper-beast.png" },
        { "name": "Aquamarine Revenge", "weapon": "AK-47", "rarity": "hidden", "img": "ak-47-aquamarine-revenge.png" },
        { "name": "Cyrex", "weapon": "SG553", "rarity": "exotic", "img": "sg553-cyrex.png" },
        { "name": "Nemesis", "weapon": "MP7", "rarity": "exotic", "img": "mp7-nemesis.png" },
        { "name": "Yellow Jacket", "weapon": "CZ75-Auto", "rarity": "exotic", "img": "cz75auto-yellow-jacket.png" },
        { "name": "Handgun", "weapon": "P2000", "rarity": "remarkable", "img": "p2000-handgun.png" },
        { "name": "Loudmouth", "weapon": "Negev", "rarity": "remarkable", "img": "negev-loudmouth.png" },
        { "name": "Ruby Poison Dart", "weapon": "MP9", "rarity": "remarkable", "img": "mp9-ruby-poison-dart.png" },
        { "name": "Evil Daimyo", "weapon": "M4A4", "rarity": "remarkable", "img": "m4a4-evil-daimyo.png" },
        { "name": "Neural Net", "weapon": "Famas", "rarity": "remarkable", "img": "famas-neural-net.png" },
        { "name": "Torque", "weapon": "USP-S", "rarity": "industrial level", "img": "usps-torque.png" },
        { "name": "Riot", "weapon": "UMP-45", "rarity": "industrial level", "img": "ump45-riot.png" },
        { "name": "Elite Build", "weapon": "P-90", "rarity": "industrial level", "img": "p90-elite-build.png" },
        { "name": "Ranger", "weapon": "nova", "rarity": "industrial level", "img": "nova-ranger.png" },
        { "name": "Bunsen Burner", "weapon": "Glock-18", "rarity": "industrial level", "img": "glock18-bunsen-burner.png" },
        { "name": "Rocket Pop", "weapon": "Galil AR", "rarity": "industrial level", "img": "galilar-rocket-pop.png" },
    ],
    "hidra": [
        {"key": "key.png"},
        {"boxName": "hidra"},
        { "name": "Oni Taiji", "weapon": "AWP", "rarity": "hidden", "img": "awp-oni-taiji.png" },
        { "name": "Hyper Beast", "weapon": "Five-SeveN", "rarity": "hidden", "img": "five-seven-hyper-beast.png" },
        { "name": "Hellfire", "weapon": "M4A4", "rarity": "hidden", "img": "m4a4-hellfire.png" },
        { "name": "Sugar Rush", "weapon": "Galil AR", "rarity": "exotic", "img": "galilar-sugar-rush.png" },
        { "name": "Cobra Strike", "weapon": "Dual Berettas", "rarity": "exotic", "img": "dual-berettas-cobra-strike.png" }
    ]
}

let caixa
function callBox(value) {
    let boxItems = document.getElementById('boxItems')
    let boxBtn = document.getElementById('boxBtn')
    boxItems.innerHTML = ""
    boxBtn.innerHTML = ""

    switch(value) {
        case 'snakebite':
          caixa = boxes.snakebite
        break;
        case 'falchion':
          caixa = boxes.falchion
        break;
        case 'hidra':
          caixa = boxes.hidra
        break;
        default:
        caixa = boxes.snakebite
    }

    for (let i = 2; i < caixa.length; i++) {
        boxItems.innerHTML += `
        <div class="boxItems-item">
            <img id="itemImg" class="boxItems-item-img" src="./assets/imgs/${value}/${caixa[i].img}">
            <h4 id="itemName" class="boxItems-item-weapon">${caixa[i].weapon}</h4>
            <h4 id="itemName" class="boxItems-item-name">${caixa[i].name}</h4>
        </div>`
    }

    boxBtn.innerHTML = `
    <img id="itemImg" class="boxBtn-img" src="./assets/imgs/${value}/${caixa[0].key}">
    <h4 id="itemName" class="boxBtn-name">Usar chave da ${value}</h4>
    <button id="itemBtn" class="boxBtn-btn" onclick="sortItems()">destrancar recipiente</button>`
}
function callResp() {
    resp.classList.toggle("active")
}
// function sortStatus() {
//     let i = Math.floor((Math.random() * 3));
//     var status = [
//         { "status": "ta zuado" },
//         { "status": "ta novo parça" },
//         { "status": "ta meio riscado" }
//     ]
//     console.log(status[i].status);
//     var teste = status[i].status
//     return teste
// }
function sortItems() {
    let n = Math.floor((Math.random() * caixa.length));
    let resp = document.getElementById('resp')



    let i = Math.floor((Math.random() * 3));
    var status = [
        { "status": "ta zuado" },
        { "status": "ta novo parça" },
        { "status": "ta meio riscado" }
    ]
    console.log(status[i].status);
    var teste = status[i].status






    if (n == 0 || n == 1) {
        sortItems()
    }else{
        callResp()
        resp.innerHTML = `
        <button class="resp-btn" onclick="callResp()">close</button>
        <h2 class="resp-text">parabéns iha, vc ganhou isso aqui ó<h2>
        <img class="resp-img" src="assets/imgs/${caixa[1].boxName}/${caixa[n].img}"> 
        <h3 class="resp-name">${caixa[n].weapon} - ${caixa[n].name}</h3> 
        <h3 class="resp-name">Status: ${teste}</h3> 
        `
    }
}



$(document).ready(function () {
    $('#boxes').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
    });
});