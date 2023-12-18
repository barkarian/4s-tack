import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sourcePath = path.join(__dirname, '../strapi/types/generated/contentTypes.d.ts');
const destinationPath = path.join(__dirname, '../sveltekit/src/lib/server/interfaces/strapi/contentTypes.d.ts');
const destinationDir = path.dirname(destinationPath);

// Check if source file exists
if (!fs.existsSync(sourcePath)) {
    console.error(`Source file does not exist: ${sourcePath}`);
    process.exit(1);
}

// Ensure destination directory exists or create it
if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
}

// Read the source file, modify its content and write to the destination file
const content = fs.readFileSync(sourcePath, 'utf8');
const modifiedContent = content.replace('@strapi/strapi', '@strapi/types');

fs.writeFile(destinationPath, modifiedContent, (err) => {
    if (err) {
        console.error(`Error writing to destination file: ${err}`);
        process.exit(1);
    } else {
        console.log('File copied and modified successfully!');
    }
});