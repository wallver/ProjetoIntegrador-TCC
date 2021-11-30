// import 'cadlivros.js';
const checkData =
{
    userName: false,
    userEmail: false,
    userPass: false
}
console.log(checkData);

//cadastro do usuário
$("#userName").change(() => {
    const userName = document.getElementById("userName").value;
    $("#invalidName").css({ display: 'none' });
    if (userName == "" || userName.length > 50) 
    {
        $("#invalidName").css({ display: "block" });
        checkData.userName= false;
    }
    else 
    {
        checkData.userName = true;
    }
    enableButtonSubmit();
    console.log(checkData);
});

$("#userEmail").change(() => {
    const userEmail = document.getElementById("userEmail").value;
    $("#invalidEmail").css({ display: 'none' });
    if (validEmail(userEmail))
    {
        checkData.userEmail = true;

    }
    else
    {
        $("#invalidEmail").css({ display: 'block' });
        checkData.userEmail = false;        
    }
    enableButtonSubmit();
    console.log(checkData);
});

$("#userPass").change(() => {
    const userPass= document.getElementById("userPass").value;
    $("#invalidPass").css({ display: 'none' });
    if (validPassword(userPass)) 
    {
        checkData.userPass = true;
    }
    else
    {
        $("#invalidPass").css({ display: 'block' });
        checkData.userPass = false;
    }
    enableButtonSubmit();
    console.log(checkData);
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

const enableButtonSubmit = () => {
    let enable = true;
    Object.keys(checkData).forEach(key => {
        console.log('key', key);
        if (!checkData[key]) 
        {
            enable = false;
        }
    });
    if (enable) 
    {
        document.getElementById('buttonSubmit').disabled = false;
    }
    else
    {
        document.getElementById('buttonSubmit').disabled = true;
    }
}
