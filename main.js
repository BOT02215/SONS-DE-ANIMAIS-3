function start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PkbsgHbJL/model.json", modelLoaded)
}

function modelLoaded() {
    classifier.classify(audioOfAnimals)
}

function audioOfAnimals(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)
        document.getElementById("Animal").innerHTML = "Animal: " + results[0].label
        document.getElementById("Precisão").innerHTML = "Precisão: " + 100 * (results[0].confidence).toFixed(2) + "%"

        if (results[0].label == "Latido") {
            document.getElementById("Chachorro").height = 350
            document.getElementById("Gato").src="gatito.png"
            document.getElementById("Leão").src="th.jpeg"
            document.getElementById("Vaca").src="vaquita.jpg"
        }
        else if (results[0].label == "Grito") {
            document.getElementById("Chachorro").src="catioro.png"
            document.getElementById("Gato").height = 350
            document.getElementById("Leão").src="th.jpeg"
            document.getElementById("aliens-04").src="vaquita.jpg"
        }
        else if (results[0].label == "Batida") {
            document.getElementById("Chachorro").src="catioro.png"
            document.getElementById("Gato").src="gatito.png"
            document.getElementById("Leão").height = 350
            document.getElementById("Vaca").src="vaquita.jpg"
        }
        else {
            document.getElementById("Chachorro").src="catioro.png"
            document.getElementById("Gato").src="gatito.png"
            document.getElementById("Leão").src="th.jpeg"
            document.getElementById("Vaca").height = 350
        }
    }
}