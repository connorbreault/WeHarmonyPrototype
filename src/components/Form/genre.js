import React from 'react';
// import { Select } from 'react-materialize';
class genreForm extends React.Component {
    render() {
        return (
            <div className="input-field col s12">
                <select multiple className="browser-default myselect">
                    <option value="" disabled defaultValue>Select the genre(s) you want to play</option>
                    <option value="Rock">Rock</option>
                    <option value="Blues">Blues</option>
                    <option value="Indie">Indie</option>
                    <option value="Metal">Metal</option>
                    <option value="Pop">Pop</option>
                    <option value="Rap">Rap</option>
                    <option value="Alternative">Alternative</option>
                </select>
                {/* <label>Select your genres</label> */}
            </div>
        )
    }
}
export default genreForm