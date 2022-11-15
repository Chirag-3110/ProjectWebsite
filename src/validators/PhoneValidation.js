const PhoneValidate=(Phone)=>{
    var validRegex = /^[7-9][0-9]{10}$/;
    try {
        if(!Phone.match(validRegex)){
            throw "Please enter a valid Phone Number";
        }
        return true
    } catch (error) {
        return error
    }
}
export default PhoneValidate