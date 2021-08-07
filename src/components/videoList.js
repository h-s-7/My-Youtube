import React from 'react';
import VideoItem from './videoItem';

export default class videoList extends React.Component
{
	render()
	{
		const videos = this.props.videos.map((video)=>{
		return(
			<VideoItem key={video.id.videoId} video={video} onVideoSelect = {this.props.onVideoSelect}/>
			);
	});
		return(
			<div className="ui relaxed divided list">{videos}</div>
			);
	}
}