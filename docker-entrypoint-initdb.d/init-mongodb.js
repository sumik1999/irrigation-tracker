/* eslint-disable no-undef */
print("Start #################################################################");

db = db.getSiblingDB("yaem_dev");
db.createUser({
  user: "yaem",
  pwd: "yaem1234",
  roles: [{ role: "readWrite", db: "yaem_dev" }],
});
db.createCollection("users");

db = db.getSiblingDB("yaem_test");
db.createUser({
  user: "yaem",
  pwd: "yaem1234",
  roles: [{ role: "readWrite", db: "yaem_test" }],
});
db.createCollection("users");

print("END #################################################################");
