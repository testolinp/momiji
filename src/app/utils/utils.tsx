import fs from 'fs'
import path from 'path'

const getJson = (jsonPath: string) => {
  const file = path.join(process.cwd(), `./public/data/${jsonPath}`)
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

export {
  getJson,
}
