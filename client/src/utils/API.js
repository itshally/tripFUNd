import axios from 'axios';

export default {
     //saves a user to the database
     createUser : (user) => {
          return axios.post('/api/user', user);
     },
     findAllUser : (user) => {
          return axios.get('api/user', user);
     }
}