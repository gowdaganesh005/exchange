const sharedConfig = require('@repo/tailwind-config')

module.exports = {
    ...sharedConfig,
    content:[
        './index.html',
        './src/**/*.{js,ts,tsx,jsx}',
        '../../packages/ui/**/*.{js,ts,tsx,jsx}',
        path.join(__dirname, "../../packages/ui/**/*.{js,ts,jsx,tsx}"),
    ]
}