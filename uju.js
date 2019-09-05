function validation() {
    var fname = document.form.fname.value;
    var lname = document.form.lname.value;
    var email = document.form.email.value;
    var title = document.form.title.value;
    var message = document.form.message.value;

    if (fname == "") {
        alert("Please Enter Your Firstname");
        document.form.fname.focus();
        return false;
    }
    if (!isNaN(fname)) {
        alert("Please Enter Only Characters");
        document.form.fname.select();
        return false;
    }
    if ((fname.length < 4) || (fname.length > 20)) {
        alert("Your Firstname must be up to 4 characters");
        document.form.fname.select();
        return false;
    }

    if (lname == "") {
        alert("Please Enter Your Lastname");
        document.form.lname.focus();
        return false;
    }
    if (!isNaN(lname)) {
        alert("Please Enter Only Characters");
        document.form.lname.select();
        return false;
    }
    if ((lname.length < 4) || (lname.length > 20)) {
        alert("Your Lastname must be up to 4 characters");
        document.form.lname.select();
        return false;
    }

    if (email == "") {
        alert("Please enter a valid e-mail address.");
        document.form.email.focus();
        return false;
    }

    if (email.indexOf("@", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        document.form.email.focus();
        return false;
    }



    if (title == "") {
        alert("Please Enter Your title");
        document.form.title.focus();
        return false;
    }

    if (message == "") {
        alert("Please Enter Your Message");
        document.form.message.focus();
        return false;
    }
    if (!isNaN(message)) {
        alert("Please Enter Only Characters");
        document.form.message.select();
        return false;
    }
    if ((message.length < 20) || (message.length > 200)) {
        alert("Your Message must be 20 to 200 Character");
        document.form.message.select();
        return false;
    }

}