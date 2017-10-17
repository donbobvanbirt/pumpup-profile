/*global should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import { summarizeString } from '../utils'

const sampleStr = '012345678901234567890123456789012345678901234567890123456789'

describe('utils', () => {
  describe('summarizeString', () => {
    it('reduces long string to length 100', () => {
      const str = `${sampleStr}${sampleStr}`
      should.equal(summarizeString(str).length, 100)
    })
  })
})
