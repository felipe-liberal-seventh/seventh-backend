import axios from 'axios';

class ResponseTime {
  get(url) {
    const instance = axios.create();

    instance.interceptors.request.use(config => {
      config.headers['request-startTime'] = process.hrtime();

      return config;
    });

    instance.interceptors.response.use(res => {
      const start = res.config.headers['request-startTime'];
      const end = process.hrtime(start);
      const milliseconds = Math.round((end[0] * 1000) + (end[1] / 1000000));

      res.headers['request-duration'] = milliseconds;

      return res;
    });

    return instance.get(url)
      .then(res => {
        if (res.status === 200) {
          return res.headers['request-duration'];
        } else {
          return null;
        }
      }).catch(err => {
        return err;
      });
  }
}

export default new ResponseTime();
