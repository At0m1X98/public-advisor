import React from "react";
import './Service.css';
import '../../App.css';

const Service = () => {
    return(
        <div className="service">
            <div className="ser-intro">
                <h1>CENÍK SLUŽEB</h1>
                <p>
                    Naše služby zahrnují zakládání firem, účetnictví, zajištění překladatelů a pomoc při vyřizování víz, 
                    trvalého bydliště i občasného průkazu. Zajistíme také další administrativní úkony, abyste se mohli 
                    plně soustředit na své podnikání. S Public Partners máte vše potřebné pro hladký chod vaší společnosti.
                </p>
                <button>Rezervace</button>
            </div>
            <div className="ser-category">
                <div className="ser">
                    <h2>Zakládám firmu</h2>
                    <p>Some text...</p>
                </div>
                <div className="ser">
                    <h2>Účetnictví</h2>
                    <p>Some text...</p>
                </div>
                <div className="ser">
                    <h2>Zajištění překladu</h2>
                    <p>Some text...</p>
                </div>
                <div className="ser">
                    <h2>Vyřízení Víza</h2>
                    <p>Some text...</p>
                </div>
                <div className="ser">
                    <h2>Vyřízení trvalého bydliště</h2>
                    <p>Some text...</p>
                </div>
                <div className="ser">
                    <h2>Vyřízení občanského průkazu</h2>
                    <p>Some text...</p>
                </div>
                <div className="ser">
                    <h2>Administrativa</h2>
                    <p>Some text...</p>
                </div>
            </div>
        </div>
    )
}

export default Service;