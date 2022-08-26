function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}



function modelReady(){
    classifier.classify(gotResults);
}
    function gotResults(error,results){
        if (error){
            console.error(error);

        }else{
            console.log(results);
            document.getElementById("result_label").innerHTML = results[0].label;
            document.getElementById("result_confidence").innerHTML = Math.floor( results[0].confidence*100);
            var img = document.getElementById("image");

            if (results[0].label == "Barking"){
                img.src = "dog.jpg";
            }else if (results[0].label == "Meowing"){
                img.src = "th.jpg";
            }else {
                img.src = "ear.jpg";
            }
        }
    }