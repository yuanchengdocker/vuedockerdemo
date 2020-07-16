const Koa = require('koa')
const Router = require('koa-router')
let os = require('os')

const app = new Koa()
const router = new Router()

// 获取本机ip地址
function getLocalIpAddress () {
  let ip = ''
  let netInfo = os.networkInterfaces()
  let osType = os.type()
  if (osType === 'Windows_NT') { 
      for (const dev in netInfo) {
          // win7的网络信息中显示为本地连接，win10显示为以太网
          if (dev === '本地连接' || dev === '以太网') {
              for (let j = 0; j < netInfo[dev].length; j++) {
                  if (netInfo[dev][j].family === 'IPv4') {
                      ip = netInfo[dev][j].address;
                      break;
                  }
              }
          }
      }
  } else if (osType === 'Linux') {
      ip = netInfo.eth0[0].address;
  }
  return ip
}

router.get('/json', async (ctx, next) => {
  ctx.body = {
    code: 0,
    data :'This is message from node container',
    ip: getLocalIpAddress()
  }
  next()
})

app.use(router.routes())

app.listen('8080', () => {
  console.log("服务已启动，地址：http://localhost:8080");
})