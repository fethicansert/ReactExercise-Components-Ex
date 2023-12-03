function Card(props){

   return (
    <div className="card">
        <div className="card-image">
            <img src={props.image}></img>
        </div>
        <div className="card-info">
             <div className="info-group"><i className="fa-solid fa-location-dot location-icon" ></i> <span className="card-country">{ props.country }</span><a className="view-google-button" href={ props.maplocation }>View on Google Maps</a></div>
             <h2 className="card-title">{ props.title }</h2>
             <div className="info-group"><span className="date">{ props.date.startDate} - { props.date.endDate }</span></div>
             <p>
                { props.info }
             </p>
        </div>
    </div>
   );
}

export default Card;