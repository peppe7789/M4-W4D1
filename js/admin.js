
const endPoint = "https://striveschool-api.herokuapp.com/api/product/"
const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjZWE0YmZlN2VmODAwMTUwNjc2MjUiLCJpYXQiOjE3MjQ3MDUzNTUsImV4cCI6MTcyNTkxNDk1NX0.0xRA9Z5LoQCCdzZ-6-AQ1E96o1LGttgZyznihYYlrqA"
const target = document.querySelector("#target")

const cards = (product) => {

    const column = document.createElement("div")
    const imageUrl = document.createElement("img")
    const name = document.createElement("h3")
    const brand = document.createElement("h5")
    const description = document.createElement("p")
    const footerCard = document.createElement("div")
    const price = document.createElement("p")
    const btnDelete = document.createElement("button")
    const btnModify = document.createElement("a")




    column.classList.add("col-12", "col-md-4", "containerCard")
    imageUrl.src = product.imageUrl
    name.textContent = product.name
    brand.textContent = product.brand
    description.textContent = product.description
    footerCard.classList.add("d-flex", "justify-content-end", "gap-2")
    price.textContent = product.price

    btnDelete.textContent = "Delete"
    btnDelete.classList.add("btn", "btn-success", "btnDelete")

    btnModify.textContent = "Modify"
    btnModify.classList.add("btn", "btn-warning", "btnModify")
    btnModify.href = `modify.html?id=${product._id}`

    target.appendChild(column)
    column.append(imageUrl, name, brand, description, footerCard, price, footerCard)
    footerCard.append(btnDelete, btnModify)

    btnDelete.addEventListener("click", () => {
        try {
            fetch(endPoint + product._id, {
                method: 'DELETE',
                headers: {
                    "Authorization": apiKey,
                    'Content-Type': 'Application/json'
                }
            })
                .then(res => res.json())
                .then(res => {
                    column.remove()

                })

        } catch (err) {
            Swal.fire({
                title: "Sorry",
                text: "Something went wrong",
                icon: "error"
            });

        }

    })


}


window.onload = () => {

    async function call() {
        try {

            const response = await fetch(endPoint, {
                headers: {
                    "Authorization": apiKey
                }

            })
            const listProduct = await response.json()

            const generateCard = listProduct.forEach(element => { cards(element) })

        } catch (err) {
            Swal.fire({
                title: "Sorry",
                text: "Something went wrong",
                icon: "error"
            });
        }

    }

    call()
}
