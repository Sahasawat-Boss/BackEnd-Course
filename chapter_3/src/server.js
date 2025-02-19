import express from 'express' //newer the syntax for import express
import path, {dirname} from 'path' //dir = directory name
import {fileURLToPath} from 'url'

const app = express()
const PORT = process.env.PORT || 3000 // if no PORT use PORT 3000

//GET the file path from the URL od the current module
const_filename = fileURLToPath(import.meta.url)
//GET the directory name from the file path
const__dirname = dirname(__filename)

//Serves

// Serving up the HTML file from the /public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// *--------------------------------------*
console.log("- Server is running fine")
app.listen(PORT, () => {
    console.log(`- Server port: ${PORT}`);
});

//cd chapter_3
// http://localhost:3000