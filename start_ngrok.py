from pyngrok import ngrok
import os


def extract_ngrok_url(raw_url):
    """Extracts the HTTPS URL from the Ngrok output."""
    if raw_url.startswith("NgrokTunnel:"):
        url = raw_url.split('"')[1]  # Extracts the URL between the first set of quotes
        return url
    else:
        return raw_url.strip()

def read_env_variable(env_file, env_variable):
    """Reads a specified environment variable from a .env file."""
    with open(env_file, 'r') as file:
        lines = file.readlines()

    for line in lines:
        if line.startswith(env_variable + '='):
            return line.split('=')[1].strip()
    return None

def update_env_file(env_file, env_variable, ngrok_url):
    """Updates a specified environment variable in a .env file."""
    with open(env_file, 'r') as file:
        lines = file.readlines()

    updated_lines = []
    variable_found = False
    for line in lines:
        if line.startswith(env_variable + '='):
            updated_lines.append(f'{env_variable}={ngrok_url}\n')
            variable_found = True
        else:
            updated_lines.append(line)

    if not variable_found:
        updated_lines.append(f'{env_variable}={ngrok_url}\n')

    with open(env_file, 'w') as file:
        file.writelines(updated_lines)

def main():
    # ANSI escape codes for text color and hyperlink
    RED_START = "\033[31m"
    RED_END = "\033[0m"
    GREEN_START = "\033[32m"  # Added for green text
    GREEN_END = "\033[0m"
    BLUE_START = "\033[34m"   # Added for blue text
    BLUE_END = "\033[0m"
    UNDERLINE_START = "\033[4m"
    UNDERLINE_END = "\033[24m"

    # Read Auth0 URL from .env
    auth0_settings_url = read_env_variable('./.env', 'AUTH0_SETTINGS_URL')
    if not auth0_settings_url:
        update_env_file('./strapi/.env', 'URL', "http://localhost:1337")
        update_env_file('./sveltekit/.env', 'PUBLIC_STRAPI_URL', "http://localhost:1337")
        print(f"{RED_START}Please set up Auth0 by following the instructions at: {UNDERLINE_START}https://github.com/barkarian/4s-tack{UNDERLINE_END}{RED_END}")
        return

    port = 1337
    # Start Ngrok tunnel
    url = ngrok.connect(port, "http")

    print("Ngrok Tunnel:", url)

    ngrok_url = extract_ngrok_url(str(url))

    # Update .env files
    update_env_file('./strapi/.env', 'URL', ngrok_url)
    update_env_file('./sveltekit/.env', 'PUBLIC_STRAPI_URL', ngrok_url)

    if auth0_settings_url:
        print(f"-Browse here: {GREEN_START}{UNDERLINE_START}{auth0_settings_url}{UNDERLINE_END}{GREEN_END}")
        print(f"-and SET Callback URLs to:{BLUE_START}{ngrok_url}/api/connect/auth0/callback{BLUE_END}")
    
    # Keep the script running
    input("Press Enter to close the tunnel...")

    # Now that tunnel is closed PUBLIC_STRAPI_URL .env is set to localhost
    update_env_file('./strapi/.env', 'URL', "http://localhost:1337")
    update_env_file('./sveltekit/.env', 'PUBLIC_STRAPI_URL', "http://localhost:1337")

    # Disconnect the tunnel
    ngrok.disconnect(url)

if __name__ == "__main__":
    main()
