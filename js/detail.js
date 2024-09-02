const endPoint = "https://striveschool-api.herokuapp.com/api/product/"
const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjZWE0YmZlN2VmODAwMTUwNjc2MjUiLCJpYXQiOjE3MjQ3MDUzNTUsImV4cCI6MTcyNTkxNDk1NX0.0xRA9Z5LoQCCdzZ-6-AQ1E96o1LGttgZyznihYYlrqA"


const nameProduct = document.getElementById("name")
const description = document.getElementById("description")
const brand = document.getElementById("brand")
const imageUrl = document.getElementById("imageUrl")
const price = document.getElementById("price")
const url = new URLSearchParams(location.search)
const id = url.get("id")







async function fillPage() {

    try {
        const response = await fetch(endPoint + id, {
            headers: {
                "Authorization": apiKey
            }
        })
        const data = await response.json()
    
        nameProduct.textContent = data.name
        description.textContent= data.description
        brand.textContent = data.brand
        imageUrl.src = data.imageUrl
        price.textContent = data.price

    } catch (err) {
        Swal.fire({
            title: "Sorry",
            text: "Something went wrong",
            icon: "error"
        });
        setTimeout(function () {
            location.href = "./index.html"
        },3000)
        
    }

   

}

fillPage()
// costruire pagina in html con lo stesso principio di quella della modifica cioe fare tutto da li e qua riempirla



