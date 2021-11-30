const checkUser =
{
       userEmail: false,
    userPass: false
}
console.log(checkUser);
$("#userEmail").change(() => {
    const userEmail = document.getElementById("userEmail").value;
    $("#invalidEmail").css({ display: 'none' });
    if (validEmail(userEmail))
    {
        checkUser.userEmail = true;

    }
    else
    {
        $("#invalidEmail").css({ display: 'block' });
        checkUser.userEmail = false;        
    }
    enableButtSubmit();
    console.log(checkUser);
});

$("#userPass").change(() => {
    const userPass= document.getElementById("userPass").value;
    $("#invalidPass").css({ display: 'none' });
    if (validPassword(userPass)) 
    {
        checkUser.userPass = true;
    }
    else
    {
        $("#invalidPass").css({ display: 'block' });
        checkUser.userPass = false;
    }
    enableButtSubmit();
    console.log(checkUser);
});

function validEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validPassword(password)
{
    let pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pass.test(password);
}
const enableButtSubmit = () => {
    let enable = true;
    Object.keys(checkUser).forEach(key => {
        console.log('key', key);
        if (!checkUser[key]) 
        {
            enable = false;
        }
    });
    if (enable) 
    {
        document.getElementById('buttSubmit').disabled = false;
    }
    else
    {
        document.getElementById('buttSubmit').disabled = true;
    }
}