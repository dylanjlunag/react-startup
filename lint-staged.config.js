module.exports = {
  '**/*.{js,jsx,ts,tsx}': 'eslint --fix --ext .js,jsx,.ts,.tsx',
  '**/*.{js,jsx,ts,tsx,css,less,scss,sass,html,json,md,mdx,yml,yaml}':
    'prettier --write'
};
