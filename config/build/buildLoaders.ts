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

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    const scssLoader = buildCSSLoaders(options.isDev)
    return [
        tsLoader,
        scssLoader,
        svgLoader,
        fileLoader
    ]
}
