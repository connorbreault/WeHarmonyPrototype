import React from 'react';
import { Select, actionHandler } from 'react-materialize';
class genreForm extends React.Component {
    render() {
        return (
            <div className="input-field col s12">

                <Select multiple defaultValue={['']} onChange={actionHandler}>
                    <option value="">
                        My styles...
                    </option>
                    <option value="Rock">
                        Rock
                    </option>
                    <option value="Blues">
                        Blues
                    </option>
                    <option value="Indie">
                        Indie
                    </option>
                    <option value="Metal">
                        Metal
                    </option>
                    <option value="Pop">
                        Pop
                    </option>
                    <option value="Rap">
                        Rap
                    </option>
                    <option value="Alternative">
                        Alternative
                    </option>
                </Select>
            </div>
        )
    }
}
export default genreForm