
const routes = require('./routes'); 
  const getRouteSource = (name, language = global.locale) =>
  routes[language][name].source;