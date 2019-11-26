import React from 'react';
import { Select, actionHandler } from 'react-materialize';
class InstrumentForm extends React.Component {
    render() {
        return (

            <div className="input-field col s12">
                <Select defaultValue='' onChange={actionHandler}>
                    <option value="" disabled>
                        My talent...
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
                </Select>
            </div>
        )
    }
}
export default InstrumentForm