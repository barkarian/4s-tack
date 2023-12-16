from pyngrok import ngrok
import os

def extract_ngrok_url(raw_url):
    """Extracts the HTTPS URL from the Ngrok output."""
    if raw_url.startswith("NgrokTunnel:"):
        url = raw_url.split('"')[1]  # Extracts the URL between the first set of quotes
        return url
    else:
        return raw_url.strip()

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
    port = 1337
    # Start Ngrok tunnel
    url = ngrok.connect(port, "http")

    print("Ngrok Tunnel URL:", url)

    ngrok_url = extract_ngrok_url(str(url))

    # Update .env files
    update_env_file('./strapi/.env', 'URL', ngrok_url)
    update_env_file('./sveltekit/.env', 'PUBLIC_STRAPI_URL', ngrok_url)

    # Keep the script running
    input("Press Enter to close the tunnel...")

    # Disconnect the tunnel
    ngrok.disconnect(url)

if __name__ == "__main__":
    main()
