import { describe } from 'node:test'
import { classNames } from './classNames'

describe('classNames', () => {
    it('test', () => {
        expect(true).toBe(true)
    })
    it('1 class', () => {
        expect(classNames('aboba')).toBe('aboba')
    })
    it('more classes', () => {
        expect(classNames('aboba', {}, ['abobus', '1'])).toBe('aboba abobus 1')
    })
    it('more classes + mods', () => {
        expect(classNames('aboba', { amogus: true, sas: false }, ['abobus', '1'])).toBe('aboba abobus 1 amogus')
    })
})
