var ping=require('net-ping');
var session=ping.createSession ();
var _init=require('../init');
var _path=require('../path');
var publisher=_init.publisher;
export const pingClient=function(ip){

  session.traceRoute (ip, 0, feedCb, doneCb);
}
function doneCb (error, target) {
    if (error)
        console.log (target + ": " + error.toString ());
    else
        console.log (target + ": Done");
}

function feedCb (error, target, ttl, sent, rcvd) {
    var ms = rcvd - sent;
    var pingObj={
      ip:target,
      ttl:ttl,
      ms:ms
    }
    if (error) {
        if (error instanceof ping.TimeExceededError) {
            console.log (target + ": " + error.source + " (ttl="
                    + ttl + " ms=" + ms +")");
            publisher.publish('ping_fail',JSON.stringify(pingObj));
        } else {
            console.log (target + ": " + error.toString ()
                    + " (ttl=" + ttl + " ms=" + ms +")");
            publisher.publish('ping_fail',JSON.stringify(pingObj));
        }
    } else {
        console.log (target + ": " + target + " (ttl=" + ttl
                + " ms=" + ms +")");

        publisher.publish(_path.ping_down_vm_win,JSON.stringify(pingObj));

    }
}
