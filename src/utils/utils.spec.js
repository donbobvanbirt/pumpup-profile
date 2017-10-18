/*global should*/
/*eslint no-undef: ["error", { "typeof": true }] */

import { summarizeString } from '../utils'

const sampleStr = '012345678901234567890123456789'
const longStr   = `${sampleStr}${sampleStr}`
const br        = ' [lineBreak] '

describe('utils', () => {

  describe('summarizeString', () => {

    it('reduces long string to length 100', () => {
      const str = `${sampleStr}${sampleStr}${sampleStr}${sampleStr}`
      should.equal(summarizeString(str).length, 100)
    })



    describe('returns only three lines', () => {
      it('when given three short lines', () => {
        const str = `${sampleStr}\n${sampleStr}\n${sampleStr}\n${sampleStr}`
        const expectedStr = `${sampleStr}${br}${sampleStr}${br}${sampleStr}`
        should.equal(summarizeString(str), expectedStr)
      })



      it('when the first line is long', () => {
        const str = `${longStr}\n${sampleStr}\n${sampleStr}`
        const expectedStr = `${longStr}${br}${sampleStr}`
        should.equal(summarizeString(str), expectedStr)
      })



      it('when the second line is long', () => {
        const str = `${sampleStr}\n${longStr}\n${sampleStr}`
        const expectedStr = `${sampleStr}${br}${longStr}`
        should.equal(summarizeString(str), expectedStr)
      })



      it('when the last line is long', () => {
        const str = `${sampleStr}\n${sampleStr}\n${longStr}`
        const expectedStr = `${sampleStr}${br}${sampleStr}${br}${sampleStr}`
        should.equal(summarizeString(str), expectedStr)
      })



      it('with three long lines of text', () => {
        const str = `${longStr}\n${longStr}\n${longStr}`
        const expectedStr = `${longStr}${br}${sampleStr}0123456789`
        should.equal(summarizeString(str), expectedStr)
      })
    })

  })
})
