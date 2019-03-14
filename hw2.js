let ojb = {
    name: 'John',
    name: 'Mary',
    name: 'Joe',
    name: 'Ben'};

    let value = {
        name: 'olena',
        age: '15',
        gender: 'female'
    }

    function names(o) {
        for (let key in o) {
               console.log(o[key]);
            }
        }
        
    

    names(ojb);
    console.log(ojb);
    console.log(value);