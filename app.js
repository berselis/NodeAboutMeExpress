const { response, request } = require('express');
const express = require('express');
const app = express();


app.get('/me', (request, response) => {
    const mySelf = {
        name: "Berselis J. Mendoza M.",
        age: 35,
        country: "Dominican Republic"
    }
    response.status(200).send(mySelf);
});

app.post('/metas', (request, response) => {

    const hobbies = [
        "ride my bmx bike",
        "spend time with my family",
        "explore adventures"
       
    ];

    response.status(200).send(hobbies);
});

app.patch('/metas', (request, response) => {
    const goals =[
        "get better income",
        "grow professionally",
        "enjoin my work"
    ];
    response.status(200).send(goals)

});

app.put('/business', (request, response) =>{

    const companies = [
        "company with a good work culture", "company that motivate you to grow", "companies that value their collaboratos"
    ];

    response.status(200).send(companies);


});


app.listen(8000, () => {
    console.log('server start at port 8000');
})


