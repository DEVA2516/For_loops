let students_record = [{
    'name': 'Stalin',
    'Dob': '18 -03-1998',
    'id': 1,
    'skills': { 'language': 'java', 'Fr_end': 'html', 'b_end': 'node js' },
    'mark': { 'web_programming': 98, 'database': 90 },
    'address': { 'door no ': '2-11', 'street': "xyz -- 35 ", 'city': 'puduthukottai', 'pin-code': 610010 }
}, {
    'name': 'YC',
    'Dob': '20-12-2000',
    'id': 2,
    'skills': { 'language': 'c', 'Fr_end': 'html', 'b_end': 'node js' },
    'mark': { 'web_programming': 20, 'database': 30 },
    'address': { 'door no ': '3-112', 'street': "xyz -- 38 ", 'city': 'trichy', 'pin-code': 610606 }
}, {
    'name': 'Surya',
    'Dob': '15-02-2001',
    'id': 3,
    'skills': { 'language': 'c++', 'Fr_end': 'css', 'b_end': 'node js' },
    'mark': { 'web_programming': 80, 'database': 90 },
    'address': { 'door no ': '2-11', 'street': "xyz -- 39 ", 'city': 'cithabram', 'pin-code': 620500 }
}, {
    'name': 'karthi',
    'Dob': '10-12-2003',
    'id': 4,
    'skills': { 'language': 'c/c++', 'Fr_end': 'css', 'b_end': 'next js' },
    'mark': { 'web_programming': 50, 'database': 60 },
    'address': { 'door no ': '6-273', 'street': "xyz -- 40 ", 'city': 'myilabur', 'pin-code': 660003 }
}, {
    'name': 'sakthi',
    'Dob': '11-2-2000',
    'id': 5,
    'skills': { 'language': 'python', 'Fr_end': 'js', 'b_end': 'next js' },
    'mark': { 'web_programming': 20, 'database': 30 },
    'address': { 'door no ': '31-11', 'street': "xyz -- 45 ", 'city': 'amathur', 'pin-code': 620001 }
}, {
    'name': 'Gokul',
    'Dob': '09-1-2002',
    'id': 6,
    'skills': { 'language': 'python', 'Fr_end': 'js', 'b_end': 'next js' },
    'address': { 'door no ': '5-1', 'street': "xyz -- 50 ", 'city': 'chennai', 'pin-code': 610001 }
}, {
    'name': 'vijay',
    'Dob': '12-10-2001',
    'id': 7,
    'skills': { 'language': 'java', 'Fr_end': 'html', 'b_end': 'node js' },
    'address': { 'door no ': '20-01', 'street': "xyz -- 60 ", 'city': 'kumbakonam', 'pin-code': 610302 }
}, {
    'name': 'Arun',
    'Dob': '07-02-2001',
    'id': 8,
    'skills': { 'language': 'c', 'Fr_end': 'html', 'b_end': 'node js' },
    'address': { 'door no ': '66/321', 'street': "xyz -- 75 ", 'city': 'kumbakonam', 'pin-code': 610302 }
}, {
    'name': 'Gowtham',
    'Dob': '08-05-2005',
    'id': 9,
    'skills': { 'language': 'java', 'Fr_end': 'html', 'b_end': 'node js' },
    'address': { 'door no ': '25/113', 'street': "xyz -- 100 ", 'city': 'madurai', 'pin-code': 610310 }
}, {
    'name': "Kumar bro",
    'Dob': '9-03-2000',
    'id': 10,
    'skills': { 'language': 'python', 'Fr_end': 'js', 'b_end': 'next js' },
    'address': { 'door no ': '67/562', 'street': "xyz -- 135 ", 'city': 'chennai', 'pin-code': 610001 }
}]

//console.log(students_record.length);

// ---------amount inseratin ----------------

let amount = 10000;
for (let i = 0; i < students_record.length; i++) {
    //console.log(students_record[i].name);
    students_record[i].amount = parseInt(amount);
    amount *= 1.2;
}

/*---------- amount display ----------------------------------------------------
    for (let i = 0; i < students_record.length;i++)
    console.log(students_record[i]['amount']);


---------- found name in students_record ---------------------------------------
let found = false;
let check_name = "YC";
let nameprint;

for (let i = 0; i < students_record.length; i++) {
    if (students_record[i].name == check_name) {
        found = true;
        nameprint = students_record[i].name;
        break;

    }
    //console.log(i);
}

console.log((found == false) ? nameprint + " is Not Found" : nameprint + " is Found");



console.log(students_record[0].address.city);

for(i = 0; i < students_record.length; i++){
    if(students_record[i].amount > 40000)
        console.log(students_record[i].name);
}


----------found skills in student_record---------------------------------------------

let found = false;
let check_name = "Surya";
let nameprint;

for (let i = 0; i < students_record.length; i++) {
    if (students_record[i].name == check_name) {
         console.log(students_record[i].skills);
        found = true;
           break;
    }
}
    console.log((found == false)? "Name not found":" ");

---------change address in student record------------------------------------------------

let found = false;
let check_name = "Stalin";
let address;

for (let i = 0; i < students_record.length; i++) {
    if (students_record[i].name == check_name) {
        students_record[i].address = {'door no ':'20-115','street':'north street','city':'chennai','pin-code':600006}
        address=  students_record[i].address
        found = true;
           break;
    }
}
    console.log((found == false)? "Name not found": address);

----------total_marks in student_record---------------------------------------------------

let found = false;
let check_name = "YC";
let total_marks;

for (let i = 0; i < students_record.length; i++) {

    if (students_record[i].name == check_name) {
        total_marks = students_record[i].mark.web_programming + students_record[i].mark.database;
        found = true;
        break;
    }
}
    console.log((found == false)? "Name not found":total_marks);


------------ found largest salary in student_record ---------------------------

let max = students_record[0].amount;

for (let i=0;i<students_record.length;i++){
        if ( students_record[i].amount > max)
            max = students_record[i].amount;

}
console.log(max);

-------------add one object in student_record--------------------------------------

students_record.push({
    'name': 'suriyabalaji', 'Dob': '12-02-1997', 'id': 11, 'skills': { 'language': 'c', 'Fr_end': 'html', 'b_end': 'next js' },
    'mark':{'web_programming': 70,'database': 79}, 'address' : { 'door no ': '3-117', 'street': 'xyz-150', 'city':'chennai', 'pin-code': 610001}
})

-------------found skill(html) of students in student_record---------------------------------------

let found = false;

for (let i = 0; i < students_record.length; i++ ){
    if (students_record[i].skills.Fr_end == 'html'){
        console.log(students_record[i].name);
        found = true;
    }
}
    console.log((found == false )? "not found" : " ");

---------list of student and amount -------------------------------

    for (let i = 0; i < students_record.length; i++){
        console.log(students_record[i].name,"=",students_record[i].amount);
    }

*/


