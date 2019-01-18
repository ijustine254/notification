/**
 * Created by Justine on 1/18/2019.
 */
const get = (selector)=>{
    return document.querySelector(selector);
};
const showMessage = (title,message,icon_url)=>{
    let notification = new Notification(title,{
        body:message,
        icon:icon_url
    });
    setTimeout(notification.close.bind(notification), 4000); //this is mainly
    // intended for chrome and opera which unlike firefox do not close
    // notifications or take a lot of time
};
const get_perm = ()=>{
    if('Notification' in window) {
        Notification.requestPermission().then((result)=> {
            let perm = Notification.permission;
            if (perm === 'granted') {
                notify(); //start showing notifications when
                // permission is granted
            }
        })
    }else{
        // hide button used to request permission for browser
        // do not support Notification API
        get('input[value=notify]').style.display='none';
    }
};
const notify = ()=>{
    let perm = Notification.permission;
    if(perm === 'default') {
        get_perm(); //ask for permission
    }else if (perm === 'granted') {
        showMessage();
    }else{
        alert("permission denied :(");
    }
};
