const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

const pkg = require(path.join(__dirname, '..', 'package.json'))

const config = {
    name: pkg.name,
    alias: pkg.name,
}

fs.writeFile(path.join(__dirname, '..', 'build', 'now.json'), JSON.stringify(config, null, 2), (err) => {
    if (err) {
        throw new Error(err)
    } else {
        console.log(chalk.green('✓ Now config created.'))
    }
})