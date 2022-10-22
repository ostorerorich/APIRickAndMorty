export const Card = ({ character }) => {
    return (
        <div className='card'>
            <img className='card_image' src={character.image} alt={character.name} />
            <div className={'card_hover ' + character.status.toLowerCase()}>
                <h2 className='character_name'>{character.name}</h2>
                <div className='character_info'>
                    <span className='card_status'>
                        Status: {' ' + character.status}
                        <span
                            className={
                                'status_' + character.status.toLowerCase()
                            }
                        ></span>
                    </span>
                    <span className='character_species'>
                        Specie: {character.species}
                    </span>
                    <span className='character_gender'>
                        Gender: {character.gender}
                    </span>
                    <span className='character_origin'>
                        Origin: {character.origin.name}
                    </span>
                    <span className='character_lastlocation'>
                        Location: {character.location.name}
                    </span>
                </div>
            </div>
        </div>
    )
}
