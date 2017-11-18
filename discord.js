module.exports = {
    hookId: '381419779656908802',
    hookToken: 'mHl868iHmbM7PYHJoAfYtFseB_pu4AxchOEbIywW23zt5dWtw_0oAlpJLEecqNUO56li',
    userName:'Weeb',
    avatarUrl:'f7999a4b4ae4f1816962a8cda2f74feb',
    sendMessage:  function(msg) {
        var querystring = require('querystring');
        var https = require('https');

        data = {
            'content':msg,
            'username':this.userName,
            'avatar_url':this.avatarUrl
        };

        postBody = querystring.stringify(data);

        options = {
            hostname: 'canary.discordapp.com',
            port: 443,
            path: '/api/webhooks/'+this.hookId+'/'+this.hookToken,
            method: 'POST',
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postBody.length
            }
        };

        var postreq = https.request(options);

        postreq.write(postBody);
        postreq.end();
    }
};
