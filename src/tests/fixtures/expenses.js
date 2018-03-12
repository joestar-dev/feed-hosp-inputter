import moment from 'moment';

export default [{
  id: '1',
  description: 'feed1', 
  note: 'Welcome to the jungle1', 
  date: 0, 
  genre: 'genre1'
}, {
  id: '2',
  description: 'feed3', 
  note: 'Welcome to the jungle3', 
  date: moment(0).subtract(4, 'days').valueOf(),
  genre: 'genre3'
}, {
  id: '3',
  description: 'feed4', 
  note: 'Welcome to the jungle4', 
  date: moment(0).add(4, 'days').valueOf(),
  genre: 'genre4'
}];
