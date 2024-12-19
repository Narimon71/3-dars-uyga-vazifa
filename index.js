

//1-vazifa 
/*
const fs = require('fs');
const path = require('path');

function createFolders(...folderNames) {
    if (folderNames.length < 1 || folderNames.length > 100) {
        throw new Error("Parametirlar soni 1 dan 100 -gacha bolishi kerak.")
    }
    folderNames.forEach(folderName => {
        const folderPath = path.join(__dirname, folderName);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log(`${folderName} papkasi yaratildi.`)
        } else {
            console.log(`${folderName} papkasi allaqochon mavjut.`)
        }
    })
}
createFolders('folder1', 'folder2', 'folder3')
*/

//2-vazifa
/*
const fs = require('fs');
const path = require('path')

const carsFilePath = path.join(__dirname, 'cars.json')

if (!fs.existsSync(carsFilePath)) {
    fs.writeFileSync(carsFilePath, JSON.stringify([]));
    console.log('cars.json  Fayli yaratildi');
}

*/
//3-vazifa
/*
const fs = require('fs');
const path = require('path')
const carsFilePath= path.join(__dirname, 'cars.json')


function addCar(data) {
    const cars = JSON.parse(fs.readFileSync(carsFilePath, 'utf-8'))
    cars.push(data)
    fs.writeFileSync(carsFilePath, JSON.stringify(cars, null, 2))
    console.log(`Mashina qoshildi: ${JSON.stringify(data)}`)
}
addCar({id: 1, model: 'mers', price: 1000})
*/

//4-vazifa
/*
const fs = require('fs')
const path = require('path')
const carsFilePath = path.join(__dirname, 'cars.json')

function getAllCars () {
    if (!fs.existsSync(carsFilePath)) {
        console.log("Fayil mavjut emas . oldin fayil yarating ")
        return []
    }
    const carsData = fs.readFileSync(carsFilePath, 'utf-8')
    const cars  = JSON.parse(carsData)
    console.log("Hamma aftomabillar:",  cars)
    return cars;
}
getAllCars()
*/

//5-vazifa
/*
const fs = require('fs'); 
const path = require('path')

const carsFilePath = path.join(__dirname, 'cars.json');
function deleteCarById(id) {
    if (!fs.existsSync(carsFilePath)) {
        console.log("Fayl mavjud emas. Iltimos, oldin ma'lumot qo'shing.");
        return;
    }
    let cars = JSON.parse(fs.readFileSync(carsFilePath, 'utf-8'))
    const initialLength = cars.length;
    cars = cars.filter(car => car.id !== id);

    if (cars.length < initialLength) {
        fs.writeFileSync(carsFilePath, JSON.stringify(cars, null, 2))
        console.log(`ID=${id} bo'lgan mashina o'chirildi.`);
    } else {
        console.log(`ID=${id} bo'lgan mashina topilmadi.`);
    }
}
deleteCarById(1)
*/


//6-vazifa
/*
//-R
const fs = require('fs');
const path = require('path')

const carsFilePath = path.join(__dirname, 'cars.json');

function readStreamData () {
    const readStream = fs.createReadStream(carsFilePath, {encoding: 'utf-8'})
    readStream.on('data', chunk => {
        console.log("Stream orqali oqildi", chunk)
    })
}
readStreamData()
*/
/*
//-W
 const fs = require('fs')
 const path = require('path')
 const carsFilePath = path.join(__dirname, 'cars.json')

function writeStreamData (data) {
    const writeStream = fs.createWriteStream(carsFilePath, {flags: 'a'})
    writeStream.write(JSON.stringify(data) + '\n')
    writeStream.end()
    console.log("Stream orqali yozildi", data)
}

writeStreamData({id: 3, model: "jentra", price: 15000} )
*/

//-D
/*
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'cars.json')

function deleteStringData () {
if(!fs.existsSync(filePath)){
    console.log("file mavjut emas ")
    return;
}
fs.unlink(filePath, err => {
    if(err) {
        console.log("Fayilni ochrishda xatolig yuz berdi", err)
    } else {
        console.log("Fayil muaffaqiyatliy ochirildi")
    }
})
}
deleteStringData()
*/

//-T
/*
const fs = require('fs')
const path = require('path');


const filePath = path.join(__dirname, 'index.txt')

function readStreamData() {
    if(!fs.existsSync(filePath)) {
     console.log("Fayil mavjut emas ")
     return;
    }

    const readStream = fs.createReadStream(filePath,{ encoding: 'utf-8'})
    console.log("Fayildagi molumot oqilmadi")

    readStream.on('data', chunk => {
        console.log(chunk)
    })
    readStream.on('end', () => {
        console.log("Malumot toliq oqildi")
    })
    readStream.on('error', err => {
        console.log("Fayil oqishda xatolig yuz berdi ", err)
    })
}
readStreamData()
*/