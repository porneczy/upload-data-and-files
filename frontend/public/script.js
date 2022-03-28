const formComponent = `
    <form id="form">
        <input type="text" name="title">
        <input type="file" name="picture">
        <button>Send</button>
    </form>
`

function loadEvent() {
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", formComponent)

    const formElement = document.getElementById("form")
    formElement.addEventListener("submit", e => {
        e.preventDefault()
        
        const formData = new FormData()// ez egy doboz. ezt postázzuk és ebbe pakolunk dolgokat amit el akarunk küldeni
        formData.append("title", e.target.querrySelector(`input[name="title"]`).value)
        formData.append("picture", e.target.querrySelector(`input[name="picture"]`).files[0])
        //itt belepakoltuk amit el akarunk küldeni
        
        const fetchSettings = {
            method: "POST",
            body: formData
        }
        fetch("/", fetchSettings)
            .then(data => {
                if (data.status === 200) {
                    e.target.outerHTML = "done"
                    console.dir(data);
                }  
            })
            .catch(error => {
                e.target.outerHTML = "error"
                console.dir(error);
            })
    })
}

window.addEventListener("load", loadEvent)