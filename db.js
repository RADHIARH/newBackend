const mongoose = require("mongoose");
const express = require("express");
var app = express();
const users = require("./models/users");
const groups = require("./models/groups");
const invitations = require("./models/invitations");
const groups_messages = require("./models/groups_messages");
const users_messages = require("./models/users_messages");
const bcryptjs = require("bcryptjs");
const passwordhash = bcryptjs.hashSync("testtest", 10);
const data1 = new groups();
const data2 = new invitations();
const data3 = new users_messages();
const data4 = new groups_messages();
const url = `mongodb+srv://radhia_rh:RADHIARAHMANI2022@cluster0.b8mc7.mongodb.net/myDataBase?retryWrites=true&w=majority`;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
const data = [
  {
    username: "Radhia Rahmani",
    email: "radhiarahmani.info@gmail.com",
    password: passwordhash,
    actif: false,
    img: "https://static.vecteezy.com/ti/vecteur-libre/t2/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg",
    phone: 54227098,
    invitations: [],
    friendsList: [],
    messages: [],
  },
  // {
  //   username: "Amna Arfaoui",
  //   email: "emna.arfaoui@gmail.com",
  //   password: "EMNAARFAOUI1999",
  //   actif: false,
  //   img: "https://i.unimedias.fr/2015/01/19/Kristina-9-ans-la-plus-belle-petite-fille-du-monde.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=675&w=1200",
  //   phone: 52147600,
  //   invitations: [],
  //   friendsList: [],
  //   messages: [],
  // },
  // {
  //   username: "Ahmed Suissi",
  //   email: "ahmedahmed14@gmail.com",
  //   password: "AHMED123456",
  //   actif: false,
  //   img: "https://img.freepik.com/photos-gratuite/homme-affaires-prospere-garde-mains-croisees-expression-satisfaite_273609-16711.jpg?size=626&ext=jpg",
  //   phone: 23441289,
  //   invitations: [],
  //   friendsList: [],
  //   messages: [],
  // },
  // {
  //   username: "Sihem benAli",
  //   email: "sihem96@gmail.com",
  //   password: "SIHEMSIHEM1996",
  //   actif: false,
  //   img: "https://st.depositphotos.com/1015583/2130/i/600/depositphotos_21307971-stock-photo-shining-girl.jpg",
  //   phone: 53500189,
  //   invitations: [],
  //   friendsList: [],
  //   messages: [],
  // },
  // {
  //   username: "NAHED BEN Fraj",
  //   email: "nahednahouda@gmail.com",
  //   password: "NAHDEDabcd1234",
  //   actif: false,
  //   img: "https://st.depositphotos.com/1024381/2170/i/600/depositphotos_21708633-stock-photo-teen-girl-beautiful-cheerful-enjoying.jpg",
  //   phone: 53500189,
  //   invitations: [],
  //   friendsList: [],
  //   messages: [],
  // },
  // {
  //   username: "Mouhamed Ayadi",
  //   email: "mohamedayadi97@gmail.com",
  //   password: "MAMOHAMED02041994",
  //   actif: false,
  //   img: "https://img.freepik.com/photos-gratuite/beau-jeune-homme-t-shirt-blanc-poitrine-bras-croises-souriant-heureux_176420-21607.jpg?size=626&ext=jpg",
  //   phone: 22456800,
  //   invitations: [],
  //   friendsList: [],
  //   messages: [],
  // },
  // {
  //   username: "Ismail Fourati",
  //   email: "ismail123654@gmail.com",
  //   password: "ISMAILISMAIL1998",
  //   actif: false,
  //   img: "https://st.depositphotos.com/1003728/3540/i/600/depositphotos_35408681-stock-photo-an-image-of-a-handsome.jpg",
  //   phone: 22456800,
  //   invitations: [],
  //   friendsList: [],
  //   messages: [],
  // },
  // {
  //   username: "Nidhal Wertani",
  //   email: "nidhalwer@gmail.com",
  //   password: "NIDHAL123456",
  //   actif: false,
  //   img: "https://thumbs.dreamstime.com/b/gar%C3%A7on-gai-de-16-ans-11664521.jpg",
  //   phone: 20123500,
  //   invitations: [],
  //   friendsList: [],
  //   messages: [],
  // },
  // {
  //   username: "Aya Ben Slimane",
  //   email: "eyaayouta@gmail.com",
  //   password: "NIDHAL123456",
  //   actif: false,
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpd7AAZRf5rxObrQAIw-wSGeK4j-O3QyXhw&usqp=CAU",
  //   phone: 51248963,
  //   invitations: [],
  //   friendsList: [],
  //   messages: [],
  // },
  // {
  //   username: "Ichrak Rahmouni",
  //   email: "ichrakichrak99@gmail.com",
  //   password: "ICHRAKRAHMOUNI99",
  //   actif: false,
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99r8zSsCjWBO9dtgLplNCbuZph5qWIT8wNQ&usqp=CAU",
  //   phone: 50233400,
  //   invitations: [],
  //   friendsList: [],
  //   messages: [],
  // },
];
users
  .insertMany(data)
  .then(function () {
    console.log("Data inserted !"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
//users_messages
// const messages = [
//   {
//     message: "hello cv ?",
//     id_sender: "62824c46642462af1be7f8bb",
//     id_receiver: "62824c46642462af1be7f8bc",
//     vue: false,
//   },
//   {
//     message: "hello again ?",
//     id_sender: "62824c46642462af1be7f8bb",
//     id_receiver: "62824c46642462af1be7f8bc",
//     vue: false,
//   },
// ];
// users_messages
//   .insertMany(messages)
//   .then(function () {
//     console.log("Data inserted"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });
// data1.save();
// data2.save();
// data3.save();
// data4.save();
