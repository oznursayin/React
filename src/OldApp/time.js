

var root = document.getElementById("root");




function deneme(){

    var template =(
        <div>
        <h1>Time is : {new Date().toLocaleTimeString()}</h1>
        </div>
    );
    ReactDOM.render(template, root);
}

setInterval(deneme,1000)
