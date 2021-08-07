import axios from 'axios';

const key = 'AIzaSyDnkN7d6GRatcKJ0PUu180kNKiEeXoeznM';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: key
	}
});