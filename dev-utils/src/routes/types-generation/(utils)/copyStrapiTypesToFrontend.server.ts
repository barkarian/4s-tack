import { rootDirectory } from '$lib/utils/Paths';
import fs from 'fs';
import path from 'path';

export const copyStrapiTypesToFrontend = (): "ok" | "not ok" => {
    const sourcePath = path.join(rootDirectory, './strapi/types/generated/contentTypes.d.ts');
    const destinationPath = path.join(rootDirectory, './sveltekit/src/lib/strapi/generated-types/contentTypes.d.ts');
    const destinationDir = path.dirname(destinationPath);

    // Check if source file exists
    if (!fs.existsSync(sourcePath)) {
        console.error(`Source file does not exist: ${sourcePath}`);
        return 'not ok';
    }

    // Ensure destination directory exists or create it
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
    }

    // Read the source file, modify its content and write to the destination file
    const content: string = fs.readFileSync(sourcePath, 'utf8');
    const modifiedContent: string = content.replace('@strapi/strapi', '@strapi/types');

    try {
        console.log({ destinationPath, modifiedContent })
        fs.writeFileSync(destinationPath, modifiedContent);
        console.log('File copied and modified successfully!');
        return 'ok';
    } catch (err) {
        console.error(`Error writing to destination file: ${err}`);
        return 'not ok';
    }
};