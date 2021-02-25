import './App.css';
import React from 'react';

import AppHeader from './../app-header/app-header';
import SearchPannel from '../search-pannel/search-pannel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

export default class App extends React.Component {
	constructor(props) {
		super();
		this.state = {
			data : [
				{message: "Going to learn React.js", important: true, id: 'qwe'},
				{message: "Whats Up", important: false, id: 'dsf'},
				{message: "Oh my Godnes", important: false, id: 'xcv'}
			]
		}
		this.deletePost = (id) => {
			console.log(id);
			const data = this.state.data;
			const newData = {
				data : data.filter((item) => item.id !== id)
			}
			this.setState((state) => newData);
		}
	}

	render() {
		return (
			<div className="app">
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPannel />
					<PostStatusFilter/>
				</div>
				<PostList
					posts={this.state.data}
					onDelete = {this.deletePost} />
				<PostAddForm/>
			</div>
		);
	}
}
