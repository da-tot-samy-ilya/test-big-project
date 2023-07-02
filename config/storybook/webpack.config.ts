// @ts-ignore
import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
// @ts-ignore
import path from "path";
import {buildCSSLoaders} from "../build/loaders/buildCSSLoaders";

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src")
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push(".ts", ".tsx")
    config.module.rules.push(buildCSSLoaders(true))
    return config
}