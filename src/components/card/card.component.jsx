import './card.styles.css';

const Card = ({monster: { id, name, email }}) => {
    return (
        <div className='card-container' key={id}>
            <img alt='monster'
                src={`https://robohash.org/${id}?set=set2&size=360x360`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;