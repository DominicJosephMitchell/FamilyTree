document.getElementById("signUpForm").addEventListener("submit", function (e) {
    // debugger;

    e.preventDefault();
    signUp();
});

var signUp = function () {
    const profile = {
        name: document.forms["signUpForm"]["name"].value,
        email: document.forms["signUpForm"]["email"].value,
        password: document.forms["signUpForm"]["password"].value,
    };
    const confirmPassword = document.forms["signUpForm"]["confirm-password"].value

    // document.write(JSON.stringify(profile));
    console.log(JSON.stringify(profile));

    // Check password
    if (profile.password != confirmPassword) {
        alert("Password must be the same as Confirmation Password.");
    } else {
        // Store profile
        var profiles = window.localStorage.profiles ? JSON.parse(window.localStorage.profiles) : [];

        // var profiles;

        // if (window.localStorage.profiles) {
        //     profiles = JSON.parse(window.localStorage.profiles);
        // } else {
        //     profiles = [];
        // }

        if (profiles.length == 0) {
            profile.id = 1;
        } else {
            profile.id = profiles.length + 1;
        }

        profiles.push(profile);
        window.localStorage.profiles = JSON.stringify(profiles);
        window.sessionStorage.loggedIn = profile.email;
        window.location.href = "./Ffamilyrelations.html";
    }

    return false;
}
