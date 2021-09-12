const redis = require('redis');
const redis_client = redis.createClient(process.env.REDIS_PORT);
    
try {
    redis_client.on('error', (err) => {
        console.log('redis connected')
    }
    );
} catch (error) {
    console.log(error+' - ' + process.env.REDIS_PORT+' - '+process.env.REDIS_HOST)
}


module.exports = redis_client;