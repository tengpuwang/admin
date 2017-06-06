/**
 * Created by shumin on 2017/2/20.
 */

const env = process.env.NODE_ENV;
console.log("ENV:" + env);
let API_ROOT = 'http://api.tengp.wang';
switch (env) {
  case "development": {
    API_ROOT = 'http://127.0.0.1:8000';
  }
}

export {API_ROOT}
