const PROXY_CONFIG = [
    {
        context:['/api'],
        target: 'http://petadot.herokuapp.com',
        secure: false,
        logLevel:'debug',
        pathRewrite:{'^/api': ''} 
    }
];

module.exports = PROXY_CONFIG;
