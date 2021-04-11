var root = document.getElementById("root");

class Card extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <p>{this.props.index}</p>
            </div>

        );
    }
}

var cardOne = {
    header: "Front-End",
    index: "Yapılma aşamasındaki bir web sitesinin ön yüzünü (client-side) HTML, CSS ve JavaScript gibi teknolojileri kullanarak web sitesinin görsel tarafını oluşturan kişilere ise front-end developer ( Ön yüz geliştirici ) denir."


}
var cardTwo = {
    header: "Back-End",
    index: "Backend ise aslında sizin göremediğiniz işlemlerin gerçekleştiği yere verilen addır. Web sitesi ile etkileşime geçtiğiniz anda Web sitesinden sunucu tarafına istekte bulunulur. Daha sonra sunucu ise gelen bu isteğe karşı bir cevap verir. Backend ise sunucu tarafında çalışır."


}




class Template extends React.Component {
    render() {
        return (
            <div>
                <Card header={cardOne.header} index={cardOne.index} />
                <Card header={cardTwo.header} index={cardTwo.index} />

            </div>


        );
    }
}


ReactDOM.render(<Template />, root);