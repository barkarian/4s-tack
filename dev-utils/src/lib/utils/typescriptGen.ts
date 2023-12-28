import * as fs from 'fs';

export function createPromptVariableItemForTsArray(constName: string, constValue: any): string {
    const content = `{
        key:"${constName}",
        context:${JSON.stringify(constValue)}
    }`
    return content;
}

export function storeTypescriptInFile(fileName: string, typescriptTypes: string): void {
    const content = typescriptTypes;
    fs.writeFile(`${fileName}.ts`, content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log(`File ${fileName}.ts created successfully.`);
    });
}