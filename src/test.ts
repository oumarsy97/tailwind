import { Alimentaire, Chimique, Incassable, Produit } from './model/produit.js';
import { Maritime, Routiere , Aerienne, Cargaison } from './model/cargaison.js';

//les cargaisons
const cargaison = new Maritime("Breukh", 130, new Date(), new Date(), 100);
const terrestre = new Routiere("Gaw", 400, new Date(), new Date(), 100);
const terrestre2 = new Routiere("Thiak Yang", 1000, new Date(), new Date(), 80);
const aeriemme = new Aerienne("Dem Gneuw", 150, new Date(), new Date(), 100);
const aeriemme2 = new Aerienne("Raftaf", 345, new Date(), new Date(), 500);
const marine = new Maritime("Baobab", 130, new Date(), new Date(), 100);

//les produits
const p = new Alimentaire("pomme", 5);
cargaison.ajouterProduit(p);
cargaison.ajouterProduit(new Chimique("pomme2", 5, 5,1));
const incassable  = new Incassable("pomme2", 5);
terrestre.ajouterProduit(incassable);
console.log(terrestre);
//un tab de Cargaison
const TabsCargaison: Cargaison[] = [];
TabsCargaison.push(cargaison);
TabsCargaison.push(terrestre);
TabsCargaison.push(terrestre2);
TabsCargaison.push(aeriemme);
TabsCargaison.push(aeriemme2);
TabsCargaison.push(marine); 
console.log(TabsCargaison)

cargaison.ajouterProduit(p)
cargaison.ajouterProduit(new Chimique("pomme2", 5, 5,1))

console.log(cargaison.getProduits())

const instance = (cargaison:Cargaison) => {
    if(cargaison instanceof Routiere) {
     return "Routiere"
    } else if(cargaison instanceof Maritime) {
     return "Maritime"
    }
    return "Aerienne"
 }

//  const model = (cargaison:Cargaison) => {
   
//     const mod = TabsCargaison.map(cargaison => `
//     <div class="bg-blue-200 shadow-md rounded-lg p-4 h-60 w-60" id="cargaison-${cargaison.getLibelle()}" >
//     <div class="w-10  text-white  mb-2 rounded-xl bg-green-600">${instance(cargaison) }</div>
//     <img src="../src/img/${instance(cargaison)}.png" alt="Photo du produit" class="w-full h-30 col-span-2 object-cover mb-2 rounded shadow-sm">
//     <h2 class="text-xl top-0 font-semibold mb-2 text-center text-blue-700">${cargaison.getLibelle()}</h2>
//     <p class="absolute bg-transparent text-600 mb-4 text-white">Poids: ${cargaison.getPoids()} kg</p>
//     </div>`).join('')
//     return mod
// }




// const cargaisons = document.querySelector('#cargaisons') as HTMLFormElement
// TabsCargaison.forEach(cargaison => {
    
//     cargaisons.innerHTML = model(cargaison)
// })
  
//   const addcargaison = document.querySelector('#addcargaison') as HTMLFormElement
//   addcargaison.addEventListener('click',() => {

//     const modalCargaison = document.querySelector('#modal-cargaison') as HTMLFormElement
//     modalCargaison.classList.remove('hidden')
//     modalCargaison.classList.add('flex')

//     const form = document.querySelector('#form') as HTMLFormElement;
//     form.addEventListener('submit', (event) => {
//         event.preventDefault()
//        const formData = getFormValues(form)
//        console.log(formData)
        
//         let errors = 0
//        for(const [key, value] of Object.entries(formData)) {
//         if(key!="type" && value === "" || value === "0") {
//             errors = 1
//             let error = key + "-error"
//           const errorElement =  document.getElementById(error) as HTMLFormElement
//           errorElement.classList.add("visible")
//           errorElement.classList.remove("invisible")
//         }else if(key!="type") {
//             let error = key + "-error"
//             const errorElement =  document.getElementById(error) as HTMLFormElement
//             errorElement.classList.add("invisible")
//             errorElement.classList.remove("visible")
//         }
//        }
    
//        if(errors === 0) {
//         let newCos;

//         if(formData["type"] === "maritime") {
//             const cargaison1 = new Maritime(formData["libelle"], parseInt(formData["poids"]), new Date(formData["dateDepart"]), new Date(formData["dateArrive"]), parseInt(formData["distance"]));
//             TabsCargaison.push(cargaison1)
//         }else if(formData["type"] === "routiere") {
//             const cargaison1 = new Routiere(formData["libelle"], parseInt(formData["poids"]), new Date(formData["dateDepart"]), new Date(formData["dateArrive"]), parseInt(formData["distance"]));
//             console.log("routiere")
//             TabsCargaison.push(cargaison1)
//         }else if(formData["type"] === "aerienne") {
//             const cargaison1 = new Aerienne(formData["libelle"], parseInt(formData["poids"]), new Date(formData["dateDepart"]), new Date(formData["dateArrive"]), parseInt(formData["distance"]));
//             TabsCargaison.push(cargaison1)
//         }
        
//         console.log(TabsCargaison)
//         const cargaisons = document.querySelector('#cargaisons') as HTMLFormElement
//         TabsCargaison.forEach(cargaison => {
            
//             cargaisons.innerHTML = model(cargaison)
//         })
//         form.reset()
//         const modalCargaison = document.querySelector('#modal-cargaison') as HTMLFormElement;
//         modalCargaison.classList.add('hidden')
//         modalCargaison.classList.remove('flex')

       

//     }
    
//     })
//   })


//   const close = document.querySelector('#close') as HTMLFormElement
//   close.addEventListener('click',() => {
//     const modalCargaison = document.querySelector('#modal-cargaison') as HTMLFormElement
//     modalCargaison.classList.add('hidden')
//     modalCargaison.classList.remove('flex')
//   })

// const menu = document.querySelector('#menu') as HTMLFormElement
// menu.addEventListener('click',() => {
//     const sidebar = document.querySelector('#sidebar') as HTMLFormElement;
//     if(sidebar.classList.contains('hidden')) {
//         sidebar.classList.remove('hidden')
//     } else {
//         sidebar.classList.add('hidden')
//     }
 
// })


//   function getFormValues(form: HTMLFormElement): { [key: string]: string } {
//     const formData = new FormData(form);
//     const values: { [key: string]: string } = {};
  
//     for (const [key, value] of formData.entries()) {
//       values[key] = String(value);
//     }
//     console.log(values)
//     return values;
//   }


// const modelProduit = (cargaison:Cargaison,produit: Produit) => {
//     return `
//     <tr class="hover:cursor-pointer cursor-pointer hover:text-gray-900 hover:bg-gray-300" id="produit-${produit.libelle}">
//                     <td class="p-2 border border-gray-300">${produit.getLibelle()}</td>
//                     <td class="p-2 border border-gray-300">${produit.getType()}</td>
//                     <td class="p-2 border border-gray-300">${produit.getPoids()}</td>
//                     <td class="p-2 border border-gray-300">${cargaison.calculFrais(produit)}</td>
//                     <td class="p-2 border border-gray-300">
//                     </td>
//     </tr>
//     `
//   }

// //les chargaisons
// const menuCargaison = document.querySelector('#menucargaison') as HTMLFormElement
// menuCargaison.addEventListener('click',() => {
//     const Divcargaison = document.querySelector('#Divcargaison') as HTMLFormElement
//     Divcargaison.classList.remove('hidden')
//     const Divproduit = document.querySelector('#Divproduit') as HTMLFormElement
//     Divproduit.classList.add('hidden')
//     Divproduit.classList.remove('flex')
//     const menuDashboard = document.querySelector('#menuDashboard') as HTMLFormElement
//     menuDashboard.classList.add('hidden')
//     menuDashboard.classList.remove('flex')
//     const addproduit = document.querySelector('#addproduit') as HTMLFormElement
//     addproduit.classList.add('hidden')
//     addproduit.classList.remove('flex')
//     const suivantproduit = document.querySelector('#suivantproduit') as HTMLFormElement
//     suivantproduit.classList.remove('flex')
//     suivantproduit.classList.add('hidden')
// })

// const retourcargaison = document.querySelector('#retourcargaison') as HTMLFormElement
// retourcargaison.addEventListener('click',() => {
//     const Divcargaison = document.querySelector('#Divcargaison') as HTMLFormElement
//     Divcargaison.classList.remove('hidden')
//     const Divproduit = document.querySelector('#Divproduit') as HTMLFormElement
//     Divproduit.classList.add('hidden')
//     Divproduit.classList.remove('flex')
//     const menuDashboard = document.querySelector('#menuDashboard') as HTMLFormElement
//     menuDashboard.classList.add('hidden')
//     menuDashboard.classList.remove('flex')
//     const addproduit = document.querySelector('#addproduit') as HTMLFormElement
//     addproduit.classList.add('hidden')
//     addproduit.classList.remove('flex')
//     const suivantproduit = document.querySelector('#suivantproduit') as HTMLFormElement
//     suivantproduit.classList.remove('flex')
//     suivantproduit.classList.add('hidden')
// })

// //Dashboard
// const Dashboard = document.querySelector('#Dashboard') as HTMLFormElement
// Dashboard.addEventListener('click',() => {
//     const Divcargaison = document.querySelector('#Divcargaison') as HTMLFormElement
//     Divcargaison.classList.add('hidden')
//     const Divproduit = document.querySelector('#Divproduit') as HTMLFormElement
//     Divproduit.classList.add('hidden')
//     Divproduit.classList.remove('flex')
//     const menuDashboard = document.querySelector('#menuDashboard') as HTMLFormElement
//     menuDashboard.classList.remove('hidden')
//     menuDashboard.classList.remove('flex')
//     const addproduit = document.querySelector('#addproduit') as HTMLFormElement
//     addproduit.classList.add('hidden')
//     addproduit.classList.remove('flex')
//     const suivantproduit = document.querySelector('#suivantproduit') as HTMLFormElement
//     suivantproduit.classList.remove('flex')
//     suivantproduit.classList.add('hidden')
    
// })

// //addProduit
// const menuproduit = document.querySelector('#menuproduit') as HTMLFormElement
// menuproduit.addEventListener('click',() => {
//     const Divcargaison = document.querySelector('#Divcargaison') as HTMLFormElement
//     Divcargaison.classList.add('hidden')
//     const Divproduit = document.querySelector('#Divproduit') as HTMLFormElement
//     Divproduit.classList.add('hidden')
//     Divproduit.classList.remove('flex')
//     const menuDashboard = document.querySelector('#menuDashboard') as HTMLFormElement
//     menuDashboard.classList.add('hidden')
//     menuDashboard.classList.remove('flex')
//     const addproduit = document.querySelector('#addproduit') as HTMLFormElement
//     addproduit.classList.remove('hidden')
//     addproduit.classList.remove('flex')
//     const suivantproduit = document.querySelector('#suivantproduit') as HTMLFormElement
//             suivantproduit.classList.remove('flex')
//             suivantproduit.classList.add('hidden')
// })

// const cargaisonClick = document.querySelectorAll('[id^="cargaison-"]') as NodeListOf<HTMLElement>;
// cargaisonClick.forEach((cargaison) => {
//   cargaison.addEventListener('click', () => {
//     console.log("clic")
//     const cg = cargaison.id.split('-')[1];
//     TabsCargaison.forEach((cargaison) => {
    
//       if (cargaison.libelle === cg) {
//         console.log("here")
//         // const cargaisons = document.querySelector('#cargaisons') as HTMLFormElement
//         const Divcargaison = document.querySelector('#Divcargaison') as HTMLFormElement
//         Divcargaison.classList.add('hidden')
//         Divcargaison.classList.remove('flex')
//         const Divproduit = document.querySelector('#Divproduit') as HTMLFormElement
//             Divproduit.classList.add('flex')
//             Divproduit.classList.remove('hidden')
//         const produits = cargaison.getProduits();
//         console.log(produits.length)
//         if(produits.length === 0) {
//             // const produit = document.querySelector('#tabproduit') as HTMLFormElement
//             // produit.innerHTML = "Aucun produit n'est disponible pour la cargaison " + cargaison.getLibelle();
//             alert("Aucun produit n'est disponible pour la cargaison " + cargaison.getLibelle());
            
//         }
//         else{
//             const produit = document.querySelector('#produit') as HTMLFormElement
//             produit.innerHTML = ""
//             cargaison.getProduits().forEach(p => {
//                 produit.innerHTML += modelProduit(cargaison,p)
//             })
//         }
       
//       }
//     })

//   });
// });


// const typeprod = document.querySelector('#typeprod') as HTMLFormElement
// typeprod.addEventListener('click',() => {
//     const degres = document.querySelector('#degres') as HTMLFormElement
//     if(typeprod.value === "chimique") {
//         degres.classList.remove('hidden')
//         degres.classList.add('flex')
//     }
//     else {
//         degres.classList.remove('flex')
//         degres.classList.add('hidden')
//     }
// })

// // const suivant = document.querySelector('#suivant') as HTMLFormElement
// // suivant.addEventListener('click',() => {
// //     const addproduit = document.querySelector('#addproduit') as HTMLFormElement
// //     addproduit.innerHTML = ''
   
// // })

// const formproduit = document.querySelector('#formproduit') as HTMLFormElement
// formproduit.addEventListener('submit',(event) => {
//     event.preventDefault()
//     const formData = getFormValues(formproduit)
  
//     let errors = 0
//     for(const [key, value] of Object.entries(formData)) {
         
//         var error = key + "-error"
//         const errorElement = document.getElementById(error) as HTMLFormElement
//         if(key!="type" && value === "" || value === "0") {
//             errors = 1
//             errorElement.classList.add("visible")
//             errorElement.classList.remove("invisible")
//         }else if(key!="type") {
//             errorElement.classList.remove("visible")
//             errorElement.classList.add("invisible")
//         }
//        }
//        console.log(errors)
//        if(errors === 0) {
//             const addproduit = document.querySelector('#addproduit') as HTMLFormElement
//             addproduit.classList.add('hidden')
//             const suivantproduit = document.querySelector('#suivantproduit') as HTMLFormElement
//             suivantproduit.classList.remove('hidden')
//             suivantproduit.classList.add('flex')
//             const choicecargaison = document.querySelector('#choicecargaison') as HTMLFormElement
//             choicecargaison.innerHTML = modelAdd()
// const addcargaisons = document.querySelectorAll('[id^="add-"]') as NodeListOf<HTMLElement>;
// console.log(addcargaisons)
// addcargaisons.forEach((cgs) => {
//     cgs.addEventListener('click', () => {
//         const cg = cgs.id.split('-')[1];
//         TabsCargaison.forEach((cargaison) => {
//             if (cargaison.libelle === cg) {
//                 let erreur = 0;
//                if(poidsRestant(cargaison) <= 1  ) {
//                 alert("Cargaison est pleine")
//                 erreur = 1
                   
//                }else if(parseInt(formData["poidsproduit"]) > poidsRestant(cargaison)) {
//                    alert("Poids invalide")
//                 erreur = 1
//                }else{
//                 if(typeprod.value === "chimique" && instance(cargaison) != "Maritime") {
//                 erreur = 1
//                 alert("les Produits chimique sont seulement disponible pour les cargaisons maritimes")
//                 }else 
//                 if(typeprod.value === "fragile" && instance(cargaison) == "Maritime") {
//                 erreur = 1
//                 alert("les Produits fragile ne sont pas disponible pour les cargaisons maritimes")
//                 }else {
//                     console.log('mougui bakh')
//                     switch (typeprod.value) {
//                         case "alimentaire":
//                         case "incassable":
//                         case "fragile":
//                             const aliment = new Alimentaire(formData["libelleproduit"], parseInt(formData["poidsproduit"]))
//                             console.log(aliment)
//                             cargaison.ajouterProduit(aliment)
//                             break;
//                         case "chimique":
//                             const chimique = new Chimique(formData["libelleproduit"], parseInt(formData["poidsproduit"]), parseInt(formData["degresproduit"]),5)
//                             console.log(chimique)
//                             cargaison.ajouterProduit(chimique)
//                         default:
//                             break;
//                     }

//                     //effacer le formulaire 
//                     formproduit.reset()
//                     const suivantproduit = document.querySelector('#suivantproduit') as HTMLFormElement
//                     suivantproduit.classList.remove('flex')
//                     suivantproduit.classList.add('hidden')
//                     const produit = document.querySelector('#produit') as HTMLFormElement
//                     const tabproduit = document.querySelector('#Divproduit') as HTMLFormElement
//                     tabproduit.classList.remove('hidden')
//                     tabproduit.classList.add('flex')
//             produit.innerHTML = ""
//             cargaison.getProduits().forEach(p => {
//                 produit.innerHTML += modelProduit(cargaison,p)
//             })
//                 }
//                }
//             }
//         })
//     })
// })



           
//        }
     

// })

// const modelAdd = () => {

//    const mod = TabsCargaison.map(cargaison => `

//    <div class="bg-blue-200 shadow-md rounded-lg p-4 h-52 w-60 flex flex-col ml-4 mb-4 cursor-pointer hover:text-white hover:bg-gray-300" id="add-${cargaison.getLibelle()}" >
//                 <span class="flex justify-between">
//                 <h2 class="text-xl font-semibold mb-2">${cargaison.getLibelle()}</h2>
//                 <h2 class="text-xl font-semibold mb-2">${cargaison.nbreProduits()}</h2>

//                 </span>
//                   <img src="./img/aerien.png" alt="" class="h-20 w-20 rounded-lg mb-2 cursor-pointer">
//                   ${instance(cargaison)}
                 
//                   <h2>Poids restant: ${poidsRestant(cargaison)}</h2>
//                 </div>`).join('')
//    return mod
// }

// const poidsRestant = (cargaison:Cargaison) =>{
//     let som = 0
//     cargaison.getProduits().forEach((carg) => {
//         som+= carg.getPoids();
        
//     });
//     return cargaison.getPoids() - som
// }
// class DisplayElement {
//     templateElement: HTMLTemplateElement;
//     hostElement: HTMLDivElement;
//     element: HTMLElement;
//     constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string) {
//         this.templateElement =<HTMLTemplateElement> document.getElementById(templateId)! ;
//         this.hostElement = document.getElementById(hostElementId)! as HTMLDivElement;
//         const importedNode = document.importNode(this.templateElement.content, true);
//         this.element = importedNode.firstElementChild as HTMLElement;
//         if (newElementId) {
//             this.element.id = newElementId;
//         }
//         this.attach(insertAtStart);
//     }
//     private attach(insertAtStart: boolean) {
//         this.hostElement.insertAdjacentElement(insertAtStart ? "afterbegin" : "beforeend", this.element);
//     }
// }
//  new DisplayElement('template', 'hostElement', true)

//  namespace Cargaison {
//      export class Cargaison {
//          private _produits: Array<Produit> = [];
//          private _poids: number = 0
//          private _libelle: string = ""  

//          constructor(libelle: string, poids: number) {
//              this._libelle = libelle
//              this._poids = poids
//          }
//          public get libelle(): string {
//              return this._libelle
//          }
//          public get poids(): number {
//              return this._poids
//          }
//          public getProduits(): Array<Produit> {
//              return this._produits
//          }
//          public ajouterProduit(produit: Produit): void {
//              this._produits.push(produit)
//              this._poids += produit.getPoids()
//          }
//          public retirerProduit(produit: Produit): void {
//              this._produits.splice(this._produits.indexOf(produit), 1)
//              this._poids -= produit.getPoids()
//          }
//          public get nbreProduits(): number {
//              return this._produits.length
//          }
//      }
//  }

//  ///reference :  src" ./Model/cargaison.ts"/
// //import * as Cargaison from "./Model/cargaison.ts"
// //si on fait default export on importe  par import Cargaison from "./Model/cargaison.ts" sans acollade
// class test {
//     static readonly max = 10
//    constructor(private _name: string, private _weigth: number) {
//    }
//    get name(): string {
//        return this._name
       
//    }
//    get weigth(): number {
//        return this._weigth
//    }

//    set weigth(weigth: number) {
//        this._weigth = weigth
//    }

//    set name(name: string) {
//        this._name = name
//    }
// }


