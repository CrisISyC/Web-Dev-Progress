const data = [{
    title: "Apreneindo JavaScript",
    year: "2023",
    isbn: "8151.125125.125",
    autor: "Carlos Azaustre",
},{
    title: "Apreneindo Promises",
    year: "2024",
    isbn: "8151.125125.125",
    autor: "Carlos Azaustre", 
},{
    title: "Apreneindo Async",
    year: "2023",
    isbn: "8151.125125.125",
    autor: "Carlos Azaustre",
}]


function getData() {
    return new Promise((resolve, reject) => {
        if (data.length==0) {
            reject(new Error("Data is empty"))
        }
        setTimeout(() => {
            resolve(data);
        }, 5000)
    })
}


async function fetchingData() {
    const books = await getData();
    console.log(books);
}


fetchingData()

