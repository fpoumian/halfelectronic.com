import { parseString } from 'xml2js'

export const parseXMLToJson = input => {
  return new Promise((resolve, reject) => {
    parseString(input, function(err, parsedData) {
      if (err) {
        reject(err)
      }
      resolve(parsedData)
    })
  })
}
