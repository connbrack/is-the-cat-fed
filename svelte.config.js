import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    alias: {
      '$styles/*': 'src/styles/*',
      '$components/*': 'src/components/*'
    }
  }
};

export default config;
