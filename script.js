let random_array = [];
//fill the array with 20 random number between -10 and 40
for (let i = 0; i < 20; i++) {
    random_array.push(Math.floor(Math.random() * 50) - 10);
}
for (i = 0; i < random_array.length; i++) {
    (function(e) {
        setTimeout(function() {
            var newTemp = document.createElement('div');
            newTemp.className = 'temp';
            var newContent = document.createElement('div');
            newContent.className = 'content';
            var newState = document.createElement('div');
            newState.className = 'state';

            if (random_array[e] <= 0) {
                let text = 'Brrrrrrr, un peu froid ce matin, mets ta cagoule !'
                set_temp_html('blue', text, newContent, newState);
            }
            else if (random_array[e] <= 20) {
                let text = 'Il fait bon, c\'est le printemps !'
                set_temp_html('green', text, newContent, newState);
            }
            else if (random_array[e] <= 30) {
                let text = 'Il fait chaud, c\'est l\'été !'
                set_temp_html('orange', text, newContent, newState);
            }
            else if (random_array[e] <= 40) {
                let text = 'Caliente ! Vamos a la playa, ho hoho hoho !!'
                set_temp_html('red', text, newContent, newState);
            }
            newContent.innerHTML = "la temperature actuelle est de " + random_array[e] + "°C";
            newTemp.appendChild(newContent);
            newTemp.appendChild(newState);
            document.getElementById('main').appendChild(newTemp);
        }, 1000 * i);
    })(i);
}

function set_temp_html(class_name, message, newContent, newState) {
    newContent.classList.add(class_name);
    newState.classList.add(class_name);
    newState.innerHTML = message;
}