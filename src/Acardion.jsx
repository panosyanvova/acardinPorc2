import { Component } from "react";

class Acardion extends Component{
    constructor(props){
        super(props)

        this.state={
            text:[
                {
                    title:"Section 1",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aliquam dolor ex odit quod doloremquereprehenderit mollitia culpa a? Quisquam non ex aut nostrum molestiae corporis magni in id dolor?"
                },
                {
                    title:"Section 2",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aliquam dolor ex odit quod doloremquereprehenderit mollitia culpa a? Quisquam non ex aut nostrum molestiae corporis magni in id dolor?"
                },
                {
                    title:"Section 3",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aliquam dolor ex odit quod doloremquereprehenderit mollitia culpa a? Quisquam non ex aut nostrum molestiae corporis magni in id dolor?"
                }
            ]
        }
    }

    render(){
        let clilk1 = 0;
        let clilk2= 0;
        let clilk3=0;

        return(
            <div className="main">
                <div className="acardionCont">
                    <div className="section1"
                        onClick={()=>{
                            if(clilk1 == 0){
                                clilk1++
                                let section1 = document.getElementsByClassName("section1")[0];
                                let div = document.createElement("div");
                                div.className="sectionText";
                                div.innerText = this.state.text[0].text
                                section1.appendChild(div);
                            }
                            else{
                                clilk1--
                                let section1 = document.getElementsByClassName("section1")[0];
                                let text = document.getElementsByClassName("sectionText")[0];
                                section1.removeChild(text)
                            }                            
                        }}
                    >
                        <h3>{this.state.text[0].title}</h3>
                    </div>
                    <div className="section2"
                    onClick={()=>{
                        if(clilk2 == 0){
                            clilk2++
                            let section2 = document.getElementsByClassName("section2")[0];
                            let div = document.createElement("div");
                            div.className="sectionText";
                            div.innerText = this.state.text[1].text
                            section2.appendChild(div);
                        }
                        else{
                            clilk2--
                            let section2 = document.getElementsByClassName("section2")[0];
                            let text = document.getElementsByClassName("sectionText")[0];
                            section2.removeChild(text)
                        }                            
                    }}
                    >
                        <h3>{this.state.text[1].title}</h3>
                    </div>
                    <div className="section3"
                        onClick={()=>{
                            if(clilk3== 0){
                                clilk3++
                                let section2 = document.getElementsByClassName("section3")[0];
                                let div = document.createElement("div");
                                div.className="sectionText";
                                div.innerText = this.state.text[2].text
                                section2.appendChild(div);
                            }
                            else{
                                clilk3--
                                let section2 = document.getElementsByClassName("section3")[0];
                                let text = document.getElementsByClassName("sectionText")[0];
                                section2.removeChild(text)
                            }                            
                        }}
                    >
                        <h3>{this.state.text[2].title}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Acardion