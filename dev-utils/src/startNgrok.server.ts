import fs from 'fs';
import ngrok from 'ngrok';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import { AUTH0_SETTINGS_URL } from '$env/static/private';

// Replace this with the appropriate type definition if you have one
type NgrokUrl = string;

function extractNgrokUrl(rawUrl: string): string {
    if (rawUrl.startsWith("NgrokTunnel:")) {
        const url = rawUrl.split('"')[1];
        return url;
    } else {
        return rawUrl.trim();
    }
}

function updateEnvFile(envFile: string, envVariable: string, ngrokUrl: string): void {
    const data = fs.readFileSync(envFile, 'utf8');
    const lines = data.split('\n');

    const updatedLines = lines.map(line =>
        line.startsWith(envVariable + '=') ? `${envVariable}=${ngrokUrl}\n` : line
    );

    if (!lines.some(line => line.startsWith(envVariable + '='))) {
        updatedLines.push(`${envVariable}=${ngrokUrl}\n`);
    }

    fs.writeFileSync(envFile, updatedLines.join('\n'));
}

export async function startNgrok(): Promise<{
    auth0SettingsUrl: string | undefined,
    auth0CallbackUrlToSet: string | undefined
}> {
    //Root directory
    const currentDirectory = process.cwd();
    console.log("Current directory:", currentDirectory);
    const rootDirectory = path.dirname(currentDirectory);
    //Log current directory parent
    console.log("Parent directory:", rootDirectory);
    // Read Auth0 URL from .env
    const auth0SettingsUrl = AUTH0_SETTINGS_URL
    if (!auth0SettingsUrl) {
        updateEnvFile(`${rootDirectory}/strapi/.env`, 'URL', "http://localhost:1337");
        updateEnvFile(`${rootDirectory}/sveltekit/.env`, 'PUBLIC_STRAPI_URL', "http://localhost:1337");
        console.error("Please set up Auth0 by following the instructions at: https://github.com/barkarian/4s-tack");
        return {
            auth0CallbackUrlToSet: undefined,
            auth0SettingsUrl: undefined
        };
    }

    const port = 1337;
    const url: NgrokUrl = await ngrok.connect({ port });

    console.log("Ngrok Tunnel:", url);

    const ngrokUrl = extractNgrokUrl(url);

    // Update .env files
    updateEnvFile(`${rootDirectory}/strapi/.env`, 'URL', ngrokUrl);
    updateEnvFile(`${rootDirectory}/sveltekit/.env`, 'PUBLIC_STRAPI_URL', ngrokUrl);

    if (auth0SettingsUrl) {
        console.log(`-Browse here: ${auth0SettingsUrl}`);
        console.log(`-and SET Callback URLs to: ${ngrokUrl}/api/connect/auth0/callback`);
    }

    console.log("Press CTRL+C to close the tunnel...");

    process.on('SIGINT', () => {
        // Now that tunnel is closed, set PUBLIC_STRAPI_URL .env to localhost
        updateEnvFile(`${rootDirectory}/strapi/.env`, 'URL', "http://localhost:1337");
        updateEnvFile(`${rootDirectory}/sveltekit/.env`, 'PUBLIC_STRAPI_URL', "http://localhost:1337");

        // Disconnect the tunnel
        ngrok.disconnect(url).then(() => {
            console.log('Ngrok tunnel disconnected.');
            process.exit(0);
        });
    });

    return {
        auth0SettingsUrl,
        auth0CallbackUrlToSet: `${ngrokUrl}/api/connect/auth0/callback`
    }
}
