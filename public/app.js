document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id

        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }
})

document.addEventListener('click', event => {
    if (event.target.dataset.type === 'edit') {
        const id = event.target.dataset.id
        const title = event.target.dataset.title
        const list = document.querySelector(".list-group-item span")

        const data = window.prompt("Введите новое название", `${title}`)

        put(id, data)
            .then(()=> {
                list.innerHTML = data
            })
    }
})

async function remove(id) {
    await fetch(`/${id}`, {method: 'DELETE'})
}

async function put(id, data) {
  console.log("datadatadata", data)
  await fetch(`/${id}`, {
    method: "PUT",
    headers: {"Accept": "application/json", "Content-Type": "application/json"},
    body: JSON.stringify({
      id: id,
      title: data,
    })
  })
}