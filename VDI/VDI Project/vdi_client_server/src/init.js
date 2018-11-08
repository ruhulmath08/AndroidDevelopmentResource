var bluebird = require('bluebird');
var redis = require("redis");
bluebird.promisifyAll(redis.RedisClient.prototype);
import {serverIp} from './path'
export const subscriber = redis.createClient(6379, serverIp)
export const publisher = redis.createClient(6379, serverIp)
export const receiver = redis.createClient(6379, serverIp)

subscriber.auth('odduu1234', function (err) {
  if (err) {
    console.log('publisher ', err)
  }
})
publisher.auth('odduu1234', function (err) {
  if (err) {
    console.log('publisher ', err)
  }
})
receiver.auth('odduu1234', function (err) {
  if (err) {
    console.log('publisher ', err)
  }
})

/**
 * @function getRedis
 * @param {string} key - Get the value of the Key from redis
 */
export const getRedis = (key) => (
		new Promise((deliver, reject) => {
      receiver.get(key, (err, val) => {
        if (err) {
          reject(err)
        }
        deliver(val)
      })
    })
)
export const getMembers=(key)=>{
  return new Promise((resolve,reject) =>{
    return receiver.smembers(key,(err,values)=>{
      if(err){
        return reject(err)
      }
      return resolve(values)
    })
  })
}
/**
 * @function addMember
 * @param {string} key -  Key, value will be stored as list/member
 * @param {any} member - value will be stored into redis.
 * @description - Save the member with corresponing key into redis data-base.
 */
export const addMember=(key,member)=>{
  receiver.sadd(key,member)
}

/**
 * @function removeMember
 * @param {string} key -
 * @param {string} members 
 * @description Removing an item from a list/members
 */
export const removeMember = (key, members) => {
  receiver.srem(key, members);
}

/**
 * @function setRedis 
 * @param {string} key - Unique key, otherwise value will be overwritten
 * @param {string} value - store the value into redis
 */
export const setRedis = (key, value) => {
  receiver.set(key, value)
}
export const getKeys=(key)=>{
  return new Promise((resolve,reject)=>{
    receiver.keys(key,(err,results)=>{
      if(err){
        return reject(err)
      }
      return resolve(results)
    })
  })
}
