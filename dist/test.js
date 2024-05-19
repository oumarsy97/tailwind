import { Alimentaire, Chimique } from './model/produit.js';
import { Cargaison, Maritime, Routiere , Aerienne} from './model/cargaison.js';
//les cargaisons
const cargaison = new Maritime("Marine", 130, new Date(), new Date(), 100);
const terrestre = new Routiere("Routiere", 400, new Date(), new Date(), 100);
const terrestre2 = new Routiere("Routiere", 1000, new Date(), new Date(), 80);
const aeriemme = new Aerienne("Cargaison 1", 10, new Date(), new Date(), 100);
const p = new Alimentaire("pomme", 5);
cargaison.ajouterProduit(p);
cargaison.ajouterProduit(new Chimique("pomme2", 5, 5));
console.log(terrestre);
//un tab de Cargaison
const TabsCargaison = [];
TabsCargaison.push(cargaison);
TabsCargaison.push(cargaison);
TabsCargaison.push(cargaison);
TabsCargaison.push(cargaison);
TabsCargaison.push(cargaison);
TabsCargaison.push(cargaison);
TabsCargaison.push(terrestre);
console.log(TabsCargaison)

const cargaisons = document.querySelector('#cargaisons')
cargaisons.innerHTML = TabsCargaison.map(cargaison => `
    <div class="bg-gray-300 shadow-md rounded-lg p-4 h-60 w-60">
        <h2 class="text-xl font-semibold mb-2 text-center text-blue-700">${cargaison.getLibelle()}</h2>
        <img src="../src/img/marine.png" alt="Photo du produit" class="w-full h-30 object-cover mb-4">
        
        <p class="bg-blue-300 text-600 mb-2">Pois: ${cargaison.getPoids()}</p>
    </div>
`).join('')
  
  const addcargaison = document.querySelector('#addcargaison')
  console.log(addcargaison)
  addcargaison.addEventListener('click',() => {

    const modalCargaison = document.querySelector('#modal-cargaison');
    modalCargaison.classList.remove('hidden')
    modalCargaison.classList.add('flex')

    const form = document.querySelector('#form')
    form.addEventListener('submit', (event) => {
        console.log("test")
        event.preventDefault()
        const formData = getFormData(form)
        let errors = 0
       for(const [key, value] of Object.entries(formData)) {
        if(key!="type" && value === "" || value === "0") {
            errors = 1
            let error = key + "-error"
            document.getElementById(error).classList.add("visible")
            document.getElementById(error).classList.remove("invisible")
        }else if(key!="type") {
            let error = key + "-error"
            document.getElementById(error).classList.add("invisible")
            document.getElementById(error).classList.remove("visible")
        }
       }
    
       if(errors === 0) {
        
        const type = formData["type"]
        if(type === "maritime") {
            const cargaison = new Maritime(formData)
            console.log(cargaison)
            
        }
    }
    
    })
  })

  function getFormData(form) {
    const formData = {};
  
    for (let i = 0; i < form.elements.length; i++) {
     
      const element = form.elements[i];
  
      if (element.name) {
        switch (element.type) {
          case "text":
           case "date":
          case "number":
          case "email":
          case "password":
          case "textarea":
            formData[element.name] = element.value;
            break;
          case "checkbox":
          case "radio":
            if (element.checked) {
              formData[element.name] = element.value;
            }
            break;
          case "select-one":
            formData[element.name] = element.value;
            break;
          case "select-multiple":
            formData[element.name] = [];
            for (let j = 0; j < element.options.length; j++) {
              const option = element.options[j];
              if (option.selected) {
                formData[element.name].push(option.value);
              }
            }
            break;
        }
      }
    }
  
    return formData;
  }

  const close = document.querySelector('#close')
  close.addEventListener('click',() => {
    const modalCargaison = document.querySelector('#modal-cargaison');
    modalCargaison.classList.add('hidden')
    modalCargaison.classList.remove('flex')
  })