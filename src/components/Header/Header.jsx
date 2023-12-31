import React from 'react';
import {changeElementStyle} from "../../helpers";

const Header = () => {
    return (
        <>
            <h2>Лівенцов Микита Вадимович</h2>
            <b>Студент групи ІС-13</b>
            <div className="info" onClick={changeElementStyle}>
                <h3>Місце народження: </h3>
                <p>м. Дружківка</p>
            </div>
            <div id="education-info" className="info" onClick={changeElementStyle}>
                <h3 id="info">Освіта: </h3>
                <p>Дружківський ліцей №5</p>
            </div>
        </>
    );
};

export default Header;