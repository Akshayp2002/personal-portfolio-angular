// Create a fake process.env in the browser
window.process = {
  env: {
    NG_APP_SPACE_ID: '',
    NG_APP_ACCESS_TOKEN: ''
  }
};
