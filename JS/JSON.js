let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);


console.log(text);
console.log(obj);

console.log(obj.employees[0].firstName + " " + obj.employees[0].lastName);


fetch('cars.json')
  .then(response => response.json())  // Parsear a JSON
  .then(data => {
    console.log(data);  // Aquí accedes a los datos
    data.cars.forEach(car => {
      console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Price: ${car.price}`);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
