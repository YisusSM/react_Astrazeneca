import { io } from 'socket.io-client'

const URL = process.env.IP_CONFIG

export const socket = io('http://localhost:3001')