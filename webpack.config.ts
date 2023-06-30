import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

export default (env: BuildEnv) => {
    const isDev = env.mode === 'development'
    return buildWebpackConfig({
        mode: env.mode || 'development',
        paths,
        port: env.port || 3000,
        isDev
    })
}
