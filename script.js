const urlAllUsers = 'https://jsonplaceholder.typicode.com/users';
const allUsers = document.getElementById('all-users-string');
const oneUserInformation = document.getElementById('one-user-info');

let users = [];

init();

function init() {
  fetch(urlAllUsers)
    .then((resp) => resp.json())
    .then(addAllUsers)
}

function addAllUsers(data) {
  users = data;
  console.log(users);

  users.forEach(function (users) {
    let newUser = document.createElement('td');
    let newUserTextNode = document.createTextNode(users.username);
    newUser.append(newUserTextNode);

    allUsers.append(newUser);
    newUser.addEventListener('click', function showUserInfo() {

      let oneUserName = document.createElement('td');
      let oneUserNameTextNode = document.createTextNode('Name: ' + users.name);
      oneUserName.classList.add('user-first-info');
      oneUserName.append(oneUserNameTextNode);
      oneUserInformation.append(oneUserName);

      let oneUserPhone = document.createElement('td');
      let oneUserPhoneTextNode = document.createTextNode('Phone: ' + users.phone);
      oneUserPhone.classList.add('user');
      oneUserPhone.append(oneUserPhoneTextNode);
      oneUserInformation.append(oneUserPhone);

      let oneUserAddress = document.createElement('td');
      let oneUserAddressTextNode = document.createTextNode('City:' + users.address.city);
      oneUserAddress.classList.add('user');
      oneUserAddress.append(oneUserAddressTextNode);
      oneUserInformation.append(oneUserAddress);

      let oneUserEmail = document.createElement('td');
      let oneUserEmailTextNode = document.createTextNode('Email: ' + users.email);
      oneUserEmail.classList.add('user');
      oneUserEmail.append(oneUserEmailTextNode);
      oneUserInformation.append(oneUserEmail);

      let oneUserWeb = document.createElement('td');
      let oneUserWebTextNode = document.createTextNode('Website: ' + users.website);
      oneUserWeb.classList.add('user');
      oneUserWeb.append(oneUserWebTextNode);
      oneUserInformation.append(oneUserWeb);

      let oneUserClose = document.createElement('td');
      let oneUserCloseTextNode = document.createTextNode('Close user');
      oneUserClose.classList.add('close-user');
      oneUserClose.append(oneUserCloseTextNode);
      oneUserInformation.append(oneUserClose);

      oneUserClose.addEventListener('click', function closeUser(){
        oneUserName.remove();
        oneUserPhone.remove();
        oneUserAddress.remove();
        oneUserEmail.remove();
        oneUserWeb.remove();
        oneUserClose.remove();
      })
    });
  })
}
