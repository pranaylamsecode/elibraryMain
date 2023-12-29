const mix = require("laravel-mix");
const CompressionPlugin = require("compression-webpack-plugin");

mix.extract();
mix.options({
    postCss: [require("autoprefixer")],
});

mix.setPublicPath("public");

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": __dirname + "resources",
        },
    },
    output: {
        chunkFilename: "js/chunks/[name].js",
    },
    stats: {
        children: true,
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CompressionPlugin({
            algorithm: "gzip",
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
});

mix.js("resources/pos/src/index.js", "public/js/app.js")
    .postCss("resources/css/app.css", "public/css/app.css", [])
    .sourceMaps()
    .react()
    .version();
mix.copyDirectory("resources/images", "public/images");
