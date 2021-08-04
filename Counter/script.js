let count = document.getElementById("count")
let decrease = document.getElementById("decrease")
let reset = document.getElementById("reset")
let increase = document.getElementById("increase")
let totalCount = 0





decrease.addEventListener("click", function(){
    
  
  if(totalCount > 0){ 
      totalCount--
      localStorage.setItem("totalCount",JSON.stringify(totalCount))
    count.innerHTML = JSON.parse(localStorage.getItem("totalCount"))
}
})


reset.addEventListener("click",function(){
    totalCount = 0
   count.innerHTML = totalCount
    localStorage.setItem("totalCount",JSON.stringify(0))
})


increase.addEventListener("click", function(){
    totalCount++
       localStorage.setItem("totalCount",JSON.stringify(totalCount))
  count.innerHTML =  JSON.parse(localStorage.getItem("totalCount"))
})

window.addEventListener("load", function(){
    
    count.innerHTML =  JSON.parse(localStorage.getItem("totalCount"))
    totalCount = JSON.parse(localStorage.getItem("totalCount"))
    
})


