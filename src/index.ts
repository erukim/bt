import { ShardingManager } from 'discord.js'
import config from '../config'
import Logger from './utils/Logger'

const logger = new Logger('shard')

console.log(`로딩`)

if (!config.bot.sharding) {
  require('./bot.ts')
} else {
  const manager = new ShardingManager(
    './src/bot.ts',
    config.bot.shardingOptions
  )

  manager.spawn()
  manager.on('shardCreate', async (shard) => {
    logger.info(`Shard #${shard.id} created.`)
  })
}
