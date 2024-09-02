
const endPoint = "https://striveschool-api.herokuapp.com/api/product/"
const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjZWE0YmZlN2VmODAwMTUwNjc2MjUiLCJpYXQiOjE3MjQ3MDUzNTUsImV4cCI6MTcyNTkxNDk1NX0.0xRA9Z5LoQCCdzZ-6-AQ1E96o1LGttgZyznihYYlrqA"
const create = document.getElementById("create")





create.addEventListener("click", e => {
    e.preventDefault()


    const name = document.getElementById("name").value
    const description = document.getElementById("description").value
    const brand = document.getElementById("brand").value
    const imageUrl = document.getElementById("imageUrl").value
    const price = document.getElementById("price").value

  
    if ((name === "") || (description === "") || (brand === "") || (imageUrl === "") || (price === "")) {

        Swal.fire({
            title: "Ops",
            text: "complete the form",
            icon: "error"
        })
       
    } else {


        const listProduct = {
            name,
            description,
            brand,
            imageUrl,
            price: Number(price)
        }

        async function call() {

            
            const response = await fetch(endPoint, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": apiKey
                },
                body: JSON.stringify(listProduct)

            })

            const data = response.json()
            Swal.fire({
                title: "Good job",
                text: "Product created successfully",
                icon: "success"
            })
            setTimeout(function () {
                location.href = "./admin.html"
            },3000)

        }

        call()
    }








})









