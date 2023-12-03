// rollup.config.js
import { kavadarka } from '@42mk/rollup-plugin-kavadarka';

export default {
	input: 'src/index.kk',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
  plugins: [
    kavadarka(),
  ]
};
