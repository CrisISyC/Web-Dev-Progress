const message = () => {
    const name = "Cristian";
    const age = 23;
    function fullName (){
        return name + ' is ' + age + ' years old.';
    }
    return fullName();
};
    
export default message;