// Promise example
const userLogin = (ms) => new Promise((resolve) => (resolve, ms));

userLogin(3000)
    .then(() => console.log('This represents looking for your login data'));

let loadSite = () => {
    console.log('site is loaded');
};

loadSite();