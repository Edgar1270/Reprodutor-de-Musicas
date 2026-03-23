const fileInput = document.getElementById("fileInput")
const audioElemento = document.getElementById("audio")

fileInput.addEventListener("change", function() {
    const file = this.files[0]
    if (file) {
        const objectURL = URL.createObjectURL(file)
        audioElemento.src = objectURL
        audioElemento.load()
        audioElemento.play()
    }
})