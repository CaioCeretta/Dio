let user = {
  name: "Caio",
};

// Modifying and accessing a property of an object
user.name = "Alex";
user["name"] = "André";

const prop = "name";
user[prop] = "José";

function getProp(prop) {
  return user[prop];
}

// Creating a property
user.lastName = "Ceretta";

// Deleting a property
delete user.lastName;
