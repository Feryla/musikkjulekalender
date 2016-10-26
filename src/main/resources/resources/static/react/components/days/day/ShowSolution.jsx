/**
 * Created by Tobias on 16.10.2016.
 */

var React = require("react");
var debug = require('debug')('ShowSolution');
var SongAudio = require('./SongAudio');

var ShowSolution = React.createClass({

    createMarkup() {
        debug('Creating markup for the following solution video: ',this.props.day.optionalSolutionVideo);
        return {__html: this.props.day.optionalSolutionVideo};
    },

    render: function() {
        return (<div>
            <p>{this.props.day.description}</p>
            <p>
                <span>{this.props.day.solutionArtist} - {this.props.day.solutionsSong} {this.props.day.optionalSolutionVideo ? <span className="youtube" dangerouslySetInnerHTML={this.createMarkup()}></span> : ""}</span>
            </p>
            <SongAudio link={this.props.day.link} />
        </div>);
    }
});

module.exports = ShowSolution;
