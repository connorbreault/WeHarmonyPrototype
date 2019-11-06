import React from 'react';
class InstrumentForm extends React.Component {
    render() {
        return (
            <div className="input-field col s12">
                <select multiple>
                    <option value="" disabled selected>Select your instrument</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Select your instruments</label>
            </div>
        )
    }
}
export default InstrumentForm