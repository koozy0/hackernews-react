import ApiService from './ApiService';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const client = new ApiService(BASE_URL);

const hackerNewsApiService = {};

hackerNewsApiService.getStories = (filter) =>
  client.get(`/${filter.toLowerCase()}stories.json?print=pretty`);

hackerNewsApiService.getItem = (id) =>
  client.get(`/item/${id}.json?print=pretty}`);

export default hackerNewsApiService;
