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

        }
        console.log(finalArray)
        finalArray.push(simpleSen)

    })

    return finalArray;
}


let newCongress =  simplifyCongress(representatives, senators);

console.log(newCongress)


