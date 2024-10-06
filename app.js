
const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchInput")
const searchContainer = document.getElementById("searchContainer")
const dropDown = document.getElementById("dropDown")
let  filterContainer = document.getElementById("filterContainer")
let  mainContainer = document.getElementById("mainContainer")
let  drkmode = document.getElementById("drkmode")
let filterResult = document.getElementById("filterResult")
let navTag = document.getElementById("navTag")




searchInput.addEventListener("keydown", displayCountry)
    
function displayCountry(){
    searchContainer.innerHTML = ""
    filterContainer.classList.add("hidden")
    searchContainer.classList.remove("hidden")

    let searchValue = searchInput.value
   
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(data => {
        if(data.status === 404){
            return searchContainer.innerText = "Country Can't be found"
        }

        else{
           return data.json()
        }
        
        
      


    })
    .then(data =>{
        
        
        const obj = data[0].currencies 

        
            const outerKeys = Object.keys(obj);  
            const innerKeys = Object.keys(obj[outerKeys[0]]);
            const Currency = obj[outerKeys[0]][innerKeys[0]]; 


            
            const obj3 = data[0].languages
            const Language = Object.values(obj3)

        let htmlcontent = `
            
            <div class="SearchContainer">

            

            <img src ="${data[0].flags.svg}"/>


            <div class="textDiv">
                <h3> ${data[0].name.common} </h3>

                <div class="details">
                    <div class="leftDetail">
              
                        <p> Population : ${data[0].population} </p>
                        <p> Region : ${data[0].region} </p>
                        <p> Sub Region : ${data[0].subregion} </p>
                        <p> Capital: ${data[0].capital} </p>

                    </div>
                    <div class="righttDetail">
                        <p> Top Level Domain: ${data[0].tld} </p>
                        <p> Currency : ${Currency} </p>
                        <p> Language : ${Language} </p>
                        <p> Borders Country : <span class="border" id = "borderId">${data[0].borders}</span> </p>
                        
                        


                    </div>





                </div>

            </div>



            </div>
        
        
        `
        searchContainer.innerHTML+= htmlcontent;
    })

}


dropDown.addEventListener("change",()=>{
    dropDownValue = dropDown.value
    searchContainer.classList.add("hidden")
    filterContainer.classList.remove("hidden")
    filterContainer.innerHTML = ''

    fetch(`https://restcountries.com/v3.1/region/${dropDownValue}`)
    .then(data => data.json())
    .then(data => {
        console.log(data);

        data.forEach(element => {
            console.log(element);

            htmlcontent= 
            `
            <div class="filterResult" id="filterResult">
                <img src = "${element.flags.svg}" alt=${element.name.common} flag image"/>
                <h4> ${element.name.common} </h4>
                <p> Population : ${element.population} </p>
                <p> Region : ${element.region} </p>
                <p> Capital : ${element.capital} </p>


            </div>
    
    
    `


    filterContainer.innerHTML += htmlcontent


})
            
        });
        
       

})

    fetch("https://restcountries.com/v3.1/all")
    .then(data => data.json())
    .then(data => 
       

        data.forEach(element => {
           

            htmlcontent = 
            `
            <div class="filterResult" id="filterResult">
                <img src = "${element.flags.svg}" alt=${element.name.common} flag image"/>
                <h4> ${element.name.common} </h4>
                <p> Population : ${element.population} </p>
                <p> Region : ${element.region} </p>
                <p> Capital : ${element.capital} </p>


            </div>
    
    
    `


    filterContainer.innerHTML += htmlcontent


})
            
        );
        
       







drkmode.addEventListener("click", ()=>{
    document.body.classList.toggle("drkmode")
    // document.body.classList.toggle("whiteText")
    // filterResult.classList.toggle("whiteText")
    filterResult.classList.toggle("whitemode")
    
})






