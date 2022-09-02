const books = [{
    title: 'The Good omens',
    authors: ['Terry', 'Neil'],
    rating: 4.42},

    {title: 'Bone, the complete edition',
    authors: ['Jeff', 'Smith'],
    rating: 4.42},

    {title:'A gentleman in Moscow',
    authors: ['Amor Towels'],
    rating: 4.36 }

]

//i want to find all books with title key 'the' using the filter method

const query = 'The';
const convert = books.filter(b => 
    {
const titles = b.title.toLowerCase();
return titles.includes(query.toLowerCase())
})

console.log (convert)


//i want to find the first book that have 'the' in the title.


