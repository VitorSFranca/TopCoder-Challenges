var translate = require('node-google-translate-skidz');

module.exports = async function(text) {
  result = text ? await translate({
    text,
    source: 'en',
    target: 'pt'
  }) : { 
    translation: ''
  };
  return {
    translation: result.translation
  };
}