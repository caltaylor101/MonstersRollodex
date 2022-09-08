import { Component } from "react";


class Card extends Component {


    render() {
        const { id, email, name } = this.props.monster;

        return (
        <div className='card-container' key={id}>
            <img alt='monster'
                src={`https://robohash.org/${id}?set=set2&size=360x360`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        )
    }
}

export default Card;