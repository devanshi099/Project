function formvalidate()
{
    var uid=document.register.name;
    var mail=document.register.email;
    var pass=document.register.password;
    if(user_validate(uid,5,12)){
        if(email_validate(mail)){
            if(pass_validate(pass,7,12)){
                
            }
        }
    }
    return false;
}
function user_validate(uid,x,y)
{
    var uid_len = uid.value.length;
    if(uid_len==0 || uid_len>=y ||uid_len<x)
    {
        alert("User Id cannot be empty / Length should be b/w "+x+"to"+y);
        uid.focus();
        return false;
    }
    return true;
}
function pass_validate(pass,x,y)
{
    var pass_len = pass.value.length;
    if(pass_len==0 || pass_len>=y ||pass_len<x)
    {
        alert("Password cannot be blank / Length should be b/w "+x+"to"+y);
        pass.focus();
        return false;
    }
    return true;
}
function email_validate(mail)
{
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.value.match(mail_format))
    {
        return true;
    }
    else {
        alert("Please enter valid Email Address");
        mail.focus();
        return false;
    }
    
}