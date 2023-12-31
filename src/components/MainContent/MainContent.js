import {Component} from "react";

class MainContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <>
               <div>
                   <h3>Хоббі:</h3>
                   <ul>
                       <li>С++</li>
                       <li>Компʼютерні ігри</li>
                       <li>Подорожі</li>
                   </ul>
               </div>
               <div>
                   <h3>Улюблені фільми:</h3>
                   <ol>
                       <li>Той, що біжить по лезу</li>
                       <li>Пролітаючи над гніздом зозулі</li>
                       <li>Губка Боб (2020)</li>
                       <li>Опенгеймер</li>
                   </ol>
               </div>
           </>
        );
    }
}

export default MainContent;