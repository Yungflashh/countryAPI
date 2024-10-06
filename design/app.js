const searchField = document.getElementById("searchField")
const searchBtn = document.getElementById("searchBtn")
const image = document.getElementById("image")
const container = document.getElementById("container")


searchBtn.addEventListener("click", ()=>{
    let searchValue = searchField.value;
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(data => data.json())
    .then(data => {
            container.innerText = ""

            let myImageUrl = data[0].flags.svg
            container.innerHTML += image.setAttribute("src", myImageUrl)
            container.innerHTML += `<p> Population : ${data[0].population} </p>`
            container.innerHTML += `<p> Region : ${data[0].region} </p>`
            container.innerHTML += `<p> Capital : ${data[0].capital} </p>`
            container.innerHTML += `<p> Sub Region : ${data[0].subregion} </p>`
            const obj = data[0].currencies // NGN {}
            const outerKeys = Object.keys(obj);  // 
            
            const innerKeys = Object.keys(obj[outerKeys[0]]); // Accessing the first outer key

            const Currency = obj[outerKeys[0]][innerKeys[0]]; // Accessing the Second outer key
            container.innerHTML += `<p> Currency: ${Currency} </p>`

            const obj2 = data[0].languages
            const Language = Object.values(obj2)

            container.innerHTML += `<p> Language(s): ${Language} </p>`            


            
            // console.log(value);
            


          
    })
    
    
})