var admin = require("firebase-admin");

var serviceAccount = require("./config/baggu-7d222-firebase-adminsdk-7asjq-660976abd1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
