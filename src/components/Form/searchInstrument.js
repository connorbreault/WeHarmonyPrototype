import React from 'react';
import { Select } from 'react-materialize';

class searchInstrument extends React.Component {
    render() {
        return (

            <div className="input-field col s12">
                <Select name={this.props.name} defaultValue={this.props.defaultValue} onChange={this.props.onChange}>
                    <option value="" disabled>
                        Select desired musician
                    </option>
                    <option value="Guitar">
                        Guitar
                    </option>
                    <option value="Bass">
                        Bass
                    </option>
                    <option value="Drums">
                        Drums
                    </option>
                    <option value="Singer">
                        Singer
                    </option>
                    <option value="Piano">
                        Piano
                    </option>
                    <option value="Violin">
                        Violin
                    </option>
                    <option value="Flute">
                        Flute
                    </option>
                    <option value="Saxophone">
                        Saxophone
                    </option>
                </Select>
            </div>
        )
    }
}
export default searchInstrument