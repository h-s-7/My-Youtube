import React from 'react';

export default class SearchBar extends React.Component
{
	state = {term: ''};
	
	onFormSubmit = (event) =>{
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render()
	{
		return(
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}> 
				<div className="field">
					<label>Video Search</label>
					<input type="text" value = {this.state.term} placeHolder="football" onChange={(e) => {this.setState({term: e.target.value})}} />
				</div>
				</form>
			</div>
			);
	}
}