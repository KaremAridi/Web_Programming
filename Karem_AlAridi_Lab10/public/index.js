function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const name = profile.getName();
    const email = profile.getEmail();
    const imageURL = profile.getImageUrl();
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("imageURL").value = imageURL;
    document.authForm.submit();

}

function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}