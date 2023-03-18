const profile = JSON.parse(localStorage.getItem("AUTH_TOKEN"));

// Log the profile information to the console
console.log(`email: ${profile.email}`);
console.log(`name: ${profile.name}`);
console.log(`dob: ${profile.dob}`);
console.log(`password: ${profile.password}`);