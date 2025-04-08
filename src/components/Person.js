import './Person.css';

function Person({ person, onVerFicha }) {
    return (
        <div className="Person" onClick={() => onVerFicha(person)}>
            <div className="Person-image">
                <img
                    alt={`${person.name.title} ${person.name.first}`}
                    src={person.picture.medium}
                />
            </div>
            <div className="Person-name">
                {person.name.title} {person.name.first}
            </div>
            <div className="Person-location">
                {person.location.city} <br /> {person.location.state}
            </div>
        </div>
    );
}

export default Person;
