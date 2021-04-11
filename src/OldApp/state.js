const root = document.getElementById("root");

class SimpleExample extends React.Component{
    constructor(){
        super();
        this.state ={
            works:false
        };
        this.changeTitle=this.changeTitle.bind(this);
    }
    changeTitle(){
        this.setState({
        works: !this.state.works
        });
    }

    render(){
        let title = this.state.works ? 'Hava Günesli' : 'Hava Yagmurlu';
        return(
            <div>
                <Main title={title}/>
                <div>
                    <button onClick={this.changeTitle}>Change</button>
                </div>
            </div>
        );
    }

}
class Main extends React.Component{
    render(){
        return(
            <h1>{this.props.title}</h1>
        );

    }
}
ReactDOM.render(<SimpleExample/>,root);