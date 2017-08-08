import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs({
      ignoreGlobal: true
    }),
    globals(),
    builtins()
  ]
}
