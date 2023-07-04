import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import {buildCSSLoaders} from "./loaders/buildCSSLoaders";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }
    const babelLoader = {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    ['@babel/preset-react', {
                        runtime: 'automatic'
                    }]
                ]
            }
        }
    }
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    const scssLoader = buildCSSLoaders(options.isDev)
    return [
        babelLoader,
        tsLoader,
        scssLoader,
        svgLoader,
        fileLoader
    ]
}
