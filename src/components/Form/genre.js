import React from 'react';
class genreForm extends React.Component {
    render() {
        return (
            <div className="input-field col s12">
                <select multiple>
                    <option value="" disabled selected>Select your genres</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Select your genres</label>
            </div>
        )
    }
}
export default genreForm