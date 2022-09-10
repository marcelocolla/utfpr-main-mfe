// #!/usr/bin/env node

// import path from 'path'
// import fs from 'fs'

import appsEntry from '../tools/appsEntry'

const modules = Object.keys(appsEntry)

console.log('>>> modules', modules)

console.log('>>> url', appsEntry[modules[0]])
