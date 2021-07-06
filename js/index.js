import { senators } from './senators.js'  
import { representatives } from './representatives.js'    


function simplifyCongress(reps, sens) {



    let finalArray = [];

    reps.forEach((rep) => {

        let simpleRep = {
            fullName: `${rep.first_name} ${rep.last_name}`,
            seniority: rep.seniority,
            state: rep.state,
            party: rep.party,
            title: rep.short_title,
            imgUrl: `https:www.govtrack.us/static/legislator-photos/${rep.govtrack_id}-100px.jpeg`

        }
        
        finalArray.push(simpleRep)
   
    })

    sens.forEach((sen) => {

        let simpleSen = {
            fullName: `${sen.first_name} ${sen.last_name}`,
            seniority: sen.seniority,
            state: sen.state,
            party: sen.party,
            title: sen.short_title,
            imgUrl: `https:www.govtrack.us/static/legislator-photos/${sen.govtrack_id}-100px.jpeg`    

        }
 
        finalArray.push(simpleSen)

    })

    return finalArray;
}


let newCongress =  simplifyCongress(representatives, senators);

const congressTiles = document.querySelector('#tileContainer')

function renderCongress(congressArray) {
    congressArray.forEach((rep) =>  {
    const tile = document.createElement("div");
    tile.setAttribute('class', 'tile');
    const img = document.createElement("img");
    img.setAttribute('src', rep.imgUrl);
    const textHolder = document.createElement("div");
    textHolder.setAttribute('class', 'name');
    const text = document.createTextNode(rep.fullName);
    textHolder.append(text);
    tile.append(img);
    tile.append(textHolder);
    congressTiles.append(tile);
})
};
renderCongress(newCongress);

//sort
function filterDems(congressArray) {
    let filteredDems = [];
    congressArray.forEach((rep) => {
        if (rep.party === 'D')
        filteredDems.push(rep)
    })
    return filteredDems;
}

const filteredDems = filterDems(newCongress);

function filterRepubs(congressArray) {
    let filteredRepubs = [];
    congressArray.forEach((rep) => {
        if (rep.party === 'R')
        filteredRepubs.push(rep)
    })
    return filteredRepubs;
}

const filteredRepubs = filterRepubs(newCongress);

function filterInds(congressArray) {
    let filteredInds = [];
    congressArray.forEach((rep) => {
        if (rep.party === 'I')
        filteredInds.push(rep)
    })
    return filteredInds;
}

const filteredInds = filterInds(newCongress);

console.log(filteredInds)