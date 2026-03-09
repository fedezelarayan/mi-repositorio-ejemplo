import path from 'path';

const filePath = './data.txt';

const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

const baseName = path.basename(filePath, '.txt');
console.log('Nombre base del archivo:', baseName);

const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath);

