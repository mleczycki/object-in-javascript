function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    }
    else {
        return "Złe hasło! Nie masz dostępu do sekretów";
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = 0;
    }
}
var superSecretFile = {
    leve: "tajne",
    opened: 0,
    password: 2,
    contents: "Następne spotkanie z dr. Zatanem odbędzie się w Katowicach."
};
var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Następne spotkanie z dr. Zatanem odbędzie się w Żywcu.");
secret = getSecret(superSecretFile, 2);
console.log(secret);
