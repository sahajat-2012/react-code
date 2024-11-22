import profilepic from './assets/japan11.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilepic} alt="profile picture"></img>
            <h2 className='card-title'>Tousualab ltd.</h2>
            <p className='card-text'>To make software and games</p>
        </div>
    );
}

export default Card
