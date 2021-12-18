 const SaveInput = document.getElementById("input-btn")


 let myLeads = []
 let ulEl = document.getElementById("ul-el")
 const inputEl = document.getElementById("input-el")

 SaveInput.addEventListener("click" , function(){
         ulEl.innerHTML=" "
   myLeads.push(inputEl.value)
  renderLeads()
  inputEl.value=""

 })


function renderLeads(){

    ulEl.innerHTML=" "
    for (i=0 ; i<myLeads.length ;i++){
        ulEl.innerHTML += "<li><a  target='-blank' href='"+myLeads+"'>"+ myLeads[i] + "</a></li> "
        
    }
  
}