import React from 'react';
import './videoItem.css';

export default class VideoList extends React.Component
{
	render()
	{
		return(
			<div className = "video-item item" onClick={()=>{this.props.onVideoSelect(this.props.video)}}>
				<img src={this.props.video.snippet.thumbnails.medium.url} 
				className="ui image" 
				alt={this.props.video.snippet.title}/>
				<div className="content">
					<div className="header">
						{this.props.video.snippet.title}
					</div>
				</div>
				
			</div>
			);
	}
}