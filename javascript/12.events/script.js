let entry = []
let form = document.getElementById("form1")
let table = document.getElementById("table")

 form.addEventListener("submit",(e)=>{
   e.preventDefault()
   let newentry ={ name: e.target.name.value,
     email : e.target.email.value,
     address :e.target.address.value
   }
   entry.push(newentry)
   createtable(newentry)
 })
 
  function createtable(value){
     let  row = document.createElement("tr")
     let col1 = document.createElement('td')
      col1.textContent = value.name
     let col2 = document.createElement('td')
     col2.textContent = value.email
     let col3 = document.createElement('td')
     col3.textContent = value.address
     let col4 = document.createElement('td')
     let deleteBtn = document.createElement("button")
      deleteBtn.textContent = "Delete"
      deleteBtn.addEventListener("click", ()=>{
        row.remove()  
      })
      
      col4.appendChild(deleteBtn)
     row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
        table.style.display="block"
    table.querySelector("tbody").appendChild(row)
  }