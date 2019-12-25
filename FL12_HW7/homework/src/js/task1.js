'use strict';

const email = prompt('Pleace, enter email', '');

const five = 5;
const six = 6;

if (!email) {
    alert('Canceled.');
} else if (email.length < five) {
    alert(`I don't know any emails having name length less than 5 symbols`);
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    const password = prompt('Pleace enter your password', '');

    if (!password) {
        alert('Canceled.');
    } else if (email === 'user@gmail.com' && password !== 'UserPass' ||
        email === 'admin@gmail.com' && password !== 'AdminPass') {
        alert('Wrong password');
    } else {
        const change = confirm('Do you want to change your password');

        if (!change) {
            alert('You have failed the change');
        } else {
            const oldPassword = prompt('Pleace enter your old password', '');

            if (email === 'user@gmail.com' && oldPassword === 'UserPass' ||
                email === 'admin@gmail.com' && oldPassword === 'AdminPass') {
                const changePassword = prompt('Pleace enter your new password', '');
                if (!changePassword) {
                    alert('Canceled.');
                } else if (changePassword.length < six) {
                    alert('It’s too short password. Sorry.');
                } else {
                    const changePasswordSecond = prompt('Pleace repeat your new password', '');
                    if (changePasswordSecond === changePassword) {
                        alert('have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Canceled.');
            }
        }
    }
} else {
    alert('I don’t know you.');
}