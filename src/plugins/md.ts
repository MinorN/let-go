// @ts-nocheck
import { marked } from 'marked'

const mdToJs = str => {
    const content = JSON.stringify(marked(str))
    return `export default ${content}`
}

export function md() {
    return {
        name: 'my-md-plugin',
        transform(src, id) {
            if (id.endsWith('.md')) {
                return mdToJs(src)
            }
        },
        // TODO 待办
        transforms: [{  // 用于 rollup // 插件
            test: context => context.path.endsWith('.md'),
            transform: ({ code }) => mdToJs(code)
        }]
    }
}