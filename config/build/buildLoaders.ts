import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => (path.includes(".module.scss")),
                        localIdentName:
                            options.isDev
                            ? "[path].[name]__[local]__[hash:base64:4]"
                            : "[hash:base64:8]"
                    }
                }
            },
            "sass-loader",
        ],
    }
    return [
        tsLoader,
        scssLoader,
        svgLoader,
        fileLoader
    ]
}