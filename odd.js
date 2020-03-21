
const school_1={
    'class_on': 'one',
    'class_t': 'two',
    'class_11' : 'five',
    'objNewPro': {
        'one' : 10,
        'five' : 20,
        'custom': 30
    }
}
const school_2={
     'class_one': 'two',
    'class_two': 'one',
    'class_ten' : 'ten',
    'objNewPro_': {
        'One' : 10,
        'five' : 20,
        'custom': 54
    }
};
const add_object={...school_2,...school_1};

console.log(add_object);





