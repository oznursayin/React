class YasHesapla extends React.Component{
    render(){
        return(
            <div>
                Dogum Yiliniz:{this.props.dogumYili}
                <br/>
                Yasiniz :{2021-this.props.dogumYili}
            </div>
        );
    }
}

class Selam extends React.Component{
    render(){
        return(
            <div>
              Selam:{this.props.selam}
            </div>
        );
    }
}

class Deneme extends React.Component{
    render(){
        return(
            <div>
               <YasHesapla dogumYili ="1981"/>
               <Selam selam="Olsan ne guzel olur"/>
               
            </div>
        )
    }
}