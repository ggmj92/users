const userList = document.getElementById('listaUsuarios');

const maxAge = 50;
const minAge = 18;

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const name = document.createElement('h1');
            const age = document.createElement('p');
            const username = document.createElement('p');
            const phone = document.createElement('p');
            const email = document.createElement('p');
            const company = document.createElement('p');
            const address = document.createElement('p');

            const randomAge = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

            img.src = `./assets/img/${user.id}.jpeg`;
            img.alt = `User: ${user.id}`;
            name.textContent = user.name;
            age.textContent = `Age: ${randomAge}`;
            username.textContent = `Username: ${user.username}`;
            phone.textContent = `Phone: ${user.phone}`;
            email.textContent = `Email: ${user.email}`;
            company.textContent = `Company: ${user.company.name}`;
            address.textContent = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}`;

            li.appendChild(img);
            li.appendChild(name);
            li.appendChild(age);
            li.appendChild(username);
            li.appendChild(phone);
            li.appendChild(email);
            li.appendChild(company);
            li.appendChild(address);

            userList.appendChild(li);

        });
    });