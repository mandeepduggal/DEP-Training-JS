// http://www.codewars.com/kata/can-you-keep-a-secret

function createSecretHolder(secret) {
    return {
        sec: secret,
        getSecret: function() {
            return this.sec;
        },
        setSecret: function(b) {
            this.sec = b;
        }
    }
}
