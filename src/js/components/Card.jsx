import react from "react";

function Card({ title, text, image, info }) {
    return (
        <div>
            <div className="card d-flex" style={{ width: "18rem", height: 500 }}>
                <img src={image} className="card-img-top" alt="..." style={{ height: 200, }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text mt-3" style={{ textAlign: "justify" }}>{text}</p>

                </div>
                <a href={info} className="btn btn-primary mx-auto mb-3" style={{ width: "75%" }}>Saber más</a>
            </div>
        </div>
    );
}



export default Card;