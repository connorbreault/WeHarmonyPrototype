import React from 'react';
class InstrumentForm extends React.Component {
    render() {
        return (
            <div className="input-field col s12">
                <select multiple className="browser-default myselect">
                    <option value="" disabled defaultValue>Select your instrument(s)</option>
                    <option value="Guitar">Guitar</option>
                    <option value="Bass">Bass</option>
                    <option value="Drums">Drums</option>
                    <option value="Singer">Singer</option>
                    <option value="Piano">Piano</option>
                    <option value="Violin">Violin</option>
                    <option value="Flute">Flute</option>
                    <option value="Saxophone">Saxophone</option>
                </select>
                {/* <label>Select your instruments</label> */}
            </div>
        )
    }
}
export default InstrumentForm