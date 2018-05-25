import trea from 'trae'
import configService from './configApi'

const musicService = trea.create({
  baseUrl: configService.apiUrl
})

export default musicService
