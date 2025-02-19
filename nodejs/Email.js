//use es6 way to create class 
class MyEmail 
{
    constructor()
    {
        this.sender = "theeasylearn@gmail.com";
        this.password = "123123";
        console.log('constructor executed.....');
    }
    SendMail(ReceiverEmail,Subject,Message)
    {
        console.log("We have send email to " + ReceiverEmail);
    }
}
module.exports.MyEmail = MyEmail;