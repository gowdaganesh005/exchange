import sharedConfig from '@repo/tailwind-config'

import path from 'path'

module.exports = {
    darkMode: "class",
    ...sharedConfig,
    content:[
        './index.html',
        './src/**/*.{js,ts,tsx,jsx}',
       
        path.join(__dirname, "../../packages/ui/**/*.{js,ts,jsx,tsx}"),
    ]
}