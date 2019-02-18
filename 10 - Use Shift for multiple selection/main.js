const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
let lastChecked; 

function handleCheck(e) {
  console.log(e)
  let inBetween = false
  //check if they had the shiftkey down and check that they are checked!
  if(e.shiftKey && this.checked){
    //loopover every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked)
      inBetween = !inBetween
      if(inBetween) {
        checkbox.checked = true
      }
    })
    
  }
  lastChecked = this
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
