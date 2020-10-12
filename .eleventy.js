module.exports = config => {
	config.addPassthroughCopy('./src/img/');
	config.addPassthroughCopy('./src/css/');
	config.addPassthroughCopy('./src/js/');
	config.setDataDeepMerge(true);
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
