import React from 'react'

export default class VideoDetail extends React.Component
{
	render()
	{
		if(!this.props.video)
		{
			return(
				<div>
					Loading...
				</div>
				);
		}
		const videoSrc = 'https://www.youtube.com/embed/'+ this.props.video.id.videoId;
		return(
			<div>
				<div className="ui embed">
					<iframe src={videoSrc} title='video player'/>
				</div>
				<div className="ui segment">
					<h4 className="ui header">{this.props.video.snippet.title}</h4>
					<p>{this.props.video.snippet.description}</p>
				</div>
			</div>
			);
	}
}