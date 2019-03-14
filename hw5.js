const usersFromJson =  [
    {
        "index": 0,
        "age": 25,
        "name": "Daisy",
        "surname": "Scott",
        "gender": "female",
        "company": "VIAGREAT",
        "email": "daisyscott@viagreat.com",
        "phone": "+1 (834) 449-3906"
      },
      {
        "index": 1,
        "age": 17,
        "name": "Maricela",
        "surname": "Powers",
        "gender": "female",
        "company": "KNEEDLES",
        "email": "maricelapowers@kneedles.com",
        "phone": "+1 (870) 407-2388"
      },
      {
        "index": 2,
        "age": 20,
        "name": "Mai",
        "surname": "Hardy",
        "gender": "female",
        "company": "ZEDALIS",
        "email": "maihardy@zedalis.com",
        "phone": "+1 (927) 474-3241"
      },
      {
        "index": 3,
        "age": 17,
        "name": "Mcdonald",
        "surname": "Mullins",
        "gender": "male",
        "company": "STUCCO",
        "email": "mcdonaldmullins@stucco.com",
        "phone": "+1 (848) 434-2836"
      },
      {
        "index": 4,
        "age": 31,
        "name": "Jocelyn",
        "surname": "Avila",
        "gender": "female",
        "company": "ENTALITY",
        "email": "jocelynavila@entality.com",
        "phone": "+1 (887) 579-2234"
      },
      {
        "index": 5,
        "age": 36,
        "name": "Lopez",
        "surname": "Mcclure",
        "gender": "male",
        "company": "RECRISYS",
        "email": "lopezmcclure@recrisys.com",
        "phone": "+1 (852) 511-2948"
      },
      {
        "index": 6,
        "age": 17,
        "name": "Lowe",
        "surname": "Foreman",
        "gender": "male",
        "company": "FISHLAND",
        "email": "loweforeman@fishland.com",
        "phone": "+1 (844) 541-2048"
      },
      {
        "index": 7,
        "age": 16,
        "name": "Rosa",
        "surname": "Wilson",
        "gender": "male",
        "company": "COMTRAIL",
        "email": "rosawilson@comtrail.com",
        "phone": "+1 (971) 571-3854"
      },
      {
        "index": 8,
        "age": 22,
        "name": "Hurley",
        "surname": "Morris",
        "gender": "male",
        "company": "COMTEXT",
        "email": "hurleymorris@comtext.com",
        "phone": "+1 (817) 462-3504"
      },
      {
        "index": 9,
        "age": 44,
        "name": "Shari",
        "surname": "Ortega",
        "gender": "female",
        "company": "RONELON",
        "email": "shariortega@ronelon.com",
        "phone": "+1 (823) 590-3924"
      }
    ]
    


class currentUser {
    constructor (user){
        this.fullName = user.name;
        this.lasName = user.surname;
        this.age = user.age;
        this.gender = user.gender;
        this.phone = user.phone;
        this.email = user.email;
        this.company = user.company;
    }
}

let newUser = {};

function ucFirstLetter(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function userFullName() {
    return this.name + " " + this.surname;
}

let stasNovsky = new currentUser({
    name: "Stas",
    surname: "Novsky",
    age: 31,
    email: "djnovsky@gmail.com",
    company: "GazProm",
    gender: "male",
    phone: "+3 8093 202 48 00"
})

//console.log(stasNovsky.fullName());


function searchUserByIndex(index){
    if (typeof index !== "number" || index > usersFromJson.length) {
        newUser = "There is no such user, try to use other index";
    } 
    
    for (let i = 0; i < usersFromJson.length; i++) {
            if (usersFromJson[i].index === index) {
                newUser = new currentUser({
                    name: usersFromJson[i].name,
                    surname: usersFromJson[i].surname,
                    age: usersFromJson[i].age,
                    gender: ucFirstLetter(usersFromJson[i].gender),
                    phone: usersFromJson[i].phone,
                    email: usersFromJson[i].email,
                    company: usersFromJson[i].company   
                }) 
            }
            
        }
        return newUser;
    } 
    





//console.log(searchUserByIndex(0));

//console.log(usersFromJson);