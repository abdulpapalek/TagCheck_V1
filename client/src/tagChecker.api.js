import axios from 'axios';
export const checkTag = async htmlStr => await axios({
  method: 'post',
  url: 'http://localhost:9000/tag/check-tag',
  data: {
    htmlStr
  }
});