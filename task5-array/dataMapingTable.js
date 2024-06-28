function displayDataAsTable(data) {
    
    console.log("| ID | Name  | Age |");
    

    
    const tableRows = data.map((item) => `| ${item.id}  | ${item.name}   | ${item.age}  |`);


    // tableRows.forEach(row => console.table(row));
    console.table(tableRows)
}

const data = [
    
    { id: 1, name: 'ameer', age: 30 },
    { id: 2, name: 'Hamza', age: 25 },
    { id: 2, name: 'Meer', age: 35 },
    { id: 2, name: 'Musa', age: 67 },
    { id: 2, name: 'Kaleem', age: 90 },
    { id: 3, name: 'Aslam', age: 35 }
];

displayDataAsTable(data);
