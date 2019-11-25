import React from 'react';
import Emoji from "../../components/Emoji";
import YouTube from 'react-youtube';
class results extends React.Component {
    state = {
        index: 0,
        showResults: true,
        noMoreMatches: false,
    };


    next = () => {
        this.state.index >= this.props.items.length - 1
            ? this.setState({ index: 0, noMoreMatches: true, showResults: false })
            : this.setState({ index: this.state.index + 1, showResults: true, noMoreMatches: false });
    };


    message = () => {
        alert("Message logic will be added")
    };

    handleViewProfile = () => {
        alert("View profile logic will be added")
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }


    render() {
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <div>
                {this.state.showResults ?
                    <div id="searchResultsContainer">
                        <h3 id="resultsText">Results</h3>

                        <div id="currentResult">

                            <div id="resultHeader">
                                <h4 className="resultUsername">{this.props.items[this.state.index].username}</h4>
                                <img className="resultProfilePic" src={this.props.items[this.state.index].profilePic} alt="" />
                                <h4 className="resultUsername">{this.props.items[this.state.index].location}</h4>
                                <h5 className="resultBio">{this.props.items[this.state.index].bio}</h5>
                            </div>

                            <div>
                                <button onClick={this.handleViewProfile} id="viewCurrentResultProfile" className="btn">View Profile</button>
                            </div>

                            <div className="resultVideos">
                                {
                                    this.props.items[this.state.index] ?
                                        (this.props.items[this.state.index].videos.map((video, index) => (
                                            <YouTube
                                                key={index}
                                                className="youtubeVid"
                                                videoId={video}
                                                opts={opts}
                                                onReady={this._onReady}
                                            />
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
                    : null}
                {/* NO MORE MATCHES */}
                {this.state.noMoreMatches ?
                    <div id="searchResultsContainer">
                        <h3 id="resultsText">Results</h3>
                        <div id="currentResult">
                            <h4>There are no more users matching your request...</h4>
                            <h4><Emoji symbol="😥" /></h4>
                        </div>
                    </div>
                    : null}
            </div>
        )
    }
}
export default results
