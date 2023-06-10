const indianFirstNames = [
  'Amit',
  'Ananya',
  'Devanshi',
  'Kavya',
  'Riya',
  'Rohit',
  'Chirag'
];

const indianLastNames = [
  'Sharma',
  'Tankan',
  'Gupta',
  'Verma',
  'Singh',
  'Choudhary'
];

const foreignFirstNames = [
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'James',
  'William',
  'Benjamin',
  'Lucas',
  'Alexander',
  'Charlotte',
  'Mia',
  'Amelia',
  'Harper',
  'Evelyn',
  'Daniel',
  'Mason',
  'Ethan',
  'Noah',
  'Liam',
  'Emily',
  'Madison',
  'Abigail',
  'Elizabeth',
  'Avery',
  'Ella',
  'Chloe',
  'Victoria',
  'Grace',
  'Scarlett'
];

const foreignLastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Jones',
  'Brown',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
  'Wilson',
  'Anderson',
  'Thomas',
  'Jackson',
  'Harris',
  'Thompson',
  'Moore',
  'Young',
  'Allen',
  'King'
];

const randomName = (isIndian) => {
  const firstNames = isIndian ? indianFirstNames : foreignFirstNames;
  const lastNames = isIndian ? indianLastNames : foreignLastNames;
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

const generateEmail = (name) => {
  const nameParts = name.split(' ');
  const firstName = nameParts[0].toLowerCase();
  const lastName = nameParts[1].toLowerCase();
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${firstName}.${lastName}@${domain}`;
};

const generatePassword = () => {
  const passwordLength = 10;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
};

const generateRandomData = () => {
  const isIndian = document.querySelector('#indian').checked;
  const name = randomName(isIndian);
  const email = generateEmail(name);
  const password = generatePassword();
  return { name, email, password };
};

const displayRandomData = () => {
  const { name, email, password } = generateRandomData();
  document.querySelector('#name').textContent = name;
  document.querySelector('#email').textContent = email;
  document.querySelector('#password').textContent = password;
};

document.querySelector('#generateBtn').addEventListener('click', displayRandomData);


//////////
// HTml
