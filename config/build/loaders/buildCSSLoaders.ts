// @ts-ignore
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCSSLoaders(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (path: string) => (path.includes('.module.scss')),
                        localIdentName:
                            isDev
                                ? '[path].[name]__[local]__[hash:base64:4]'
                                : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ]
    }
}