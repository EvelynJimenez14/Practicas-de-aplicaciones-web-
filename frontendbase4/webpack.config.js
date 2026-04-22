const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/Aplicacion.jsx",
    output: {
    path:path.resolve(__dirname, '../backendbase4/public'),
    filename: "main.js",
    clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './plantilla/index.html', // Ruta plantilla HTML
          path:path.resolve(__dirname, '../backendbase4/public'),
          filename: 'index.html', // Nombre del archivo de salida
        })
      ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
    devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    port: 8080, // Puerto del servidor
    open: true, // Abrir navegador automáticamente
    hot: true, // Habilitar Hot Module Replacement (HMR)
    historyApiFallback: true, // Aplicaciones SPA
  }            
  }
