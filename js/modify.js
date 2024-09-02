const endPoint = "https://striveschool-api.herokuapp.com/api/product/"
const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjZWE0YmZlN2VmODAwMTUwNjc2MjUiLCJpYXQiOjE3MjQ3MDUzNTUsImV4cCI6MTcyNTkxNDk1NX0.0xRA9Z5LoQCCdzZ-6-AQ1E96o1LGttgZyznihYYlrqA"




const nameProduct = document.getElementById("name")
const description = document.getElementById("description")
const brand = document.getElementById("brand")
const imageUrl = document.getElementById("imageUrl")
const price = document.getElementById("price")
const url = new URLSearchParams(location.search)
const id = url.get("id")
const save = document.querySelector("#save")


async function fillForm() {

    const response = await fetch(endPoint + id, {
        headers: {
            "Authorization": apiKey
        }
    })
    const data = await response.json()

    nameProduct.value = data.name
    description.value = data.description
    brand.value = data.brand
    imageUrl.value = data.imageUrl
    price.value = data.price
}

fillForm()

save.addEventListener("click", updateProduct)

async function updateProduct(e) {
    
    try {

        e.preventDefault()
        const listProduct = {
            name: nameProduct.value,
            description: description.value,
            brand: brand.value,
            imageUrl: imageUrl.value,
            price: Number(price.value)
        }
    
        const response = await fetch(endPoint + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": apiKey
            },
            body: JSON.stringify(listProduct)
        })
        const data = await response.json()
    
        Swal.fire({
            title: "Good job",
            text: "Product created successfully",
            icon: "success"
        })
        setTimeout(function () {
            location.href = "./admin.html"
        },3000)

    } catch (err) {
        Swal.fire({
            title: "Sorry",
            text: "Something went wrong",
            icon: "error"
        });
}
    
}












