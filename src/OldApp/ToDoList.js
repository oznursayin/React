// import './App.css';

var root = document.getElementById("root");

var app = {
    title: "Todo App",
    description: "This is My Todo App",
    items: []
};

function onFormSubmit(event) {
    event.preventDefault();

    var item = event.target.txtItem.value;

    if (item) {
        app.items.push(item);
        event.target.elements.txtItem.value = "";
        render();
    }
    console.log(item);
}

function clearItems() {
    app.items = [];
    render();
}

function render() {
    var template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.description}</p>
            {
                <ul>
                    {
                        app.items.map((item, index) => {
                            return <li key={index}>{item}</li>


                        })
                    }
                </ul>
            }
            <p><button class= "btn-primary" onClick={clearItems}>Clear</button></p>

            <p>{app.items.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="txtItem" />
                <button class="btn-primary" type="submit">Add Item</button>
            </form>

        </div>
    );
    ReactDOM.render(template, root);
}
render();

