import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {mapStateToProps , mapDispatchToProps} from '../helper';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={() => this.props.addPerson()} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() =>this.props.removePerson( person.id )}/>
                ))}
            </div>
        );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Persons);
