

const form = document.querySelector('#form')
form.addEventListener('submit', (event) => {
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
  