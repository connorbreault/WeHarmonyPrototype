import React from 'react';
class results extends React.Component {
    state = {
        index: 0
    };
    next = () => {
        this.state.index >= this.props.items.length - 1
            ? this.setState({ index: 0 })
            : this.setState({ index: this.state.index + 1 });
    };
    message = () => {
        alert("Message logic will be added")
    };
    handleViewProfile = () => {
        alert("View profile logic will be added")
    }
    render() {
        return (
            <div id="searchResultsContainer">
                <h3 id="resultsText">Results</h3>

                <div id="currentResult">

                    <div id="resultHeader">
                        <h4 className="resultUsername">{this.props.items[this.state.index].username}</h4>
                        <img className="resultProfilePic" src={this.props.items[this.state.index].profilePic} alt="" />
                        <h5 className="resultBio">{this.props.items[this.state.index].bio}</h5>
                    </div>

                    <div>
                        <button onClick={this.handleViewProfile} id="viewCurrentResultProfile" className="btn">View Profile</button>
                    </div>

                    <div className="resultVideos">
                        {
                            this.props.items[this.state.index] ?
                                (this.props.items[this.state.index].videos.map((video, index) => (
                                    <div key={index}><img src={video} alt="cool pics" className="video" /></div>
                                ))) :
                                (<div></div>)
                        }
                    </div>
                </div>

                <div id="responseButtons">
                    <button onClick={this.message} id="messageUser" className="btn">Message</button>
                    <button onClick={this.next} id="nextResult" className="btn">Next</button>
                </div>
            </div>
        )
    }
}
export default results
