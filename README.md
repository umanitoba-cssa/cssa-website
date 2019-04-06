# Contributing

## Set up Git

#### Get Git

Please follow instructions 1-3 https://help.github.com/en/articles/set-up-git

#### Clone repoistory

```sh
$ git clone https://github.com/umanitoba-cssa/cssa-website
$ cd cssa-website
```

Please create a new branch before you start making changes.

```sh
$ git checkout -b Name-Of-My-New-Branch
```

## Install NodeJS

### Setup instructions for Linux/MacOS

#### Verify your environment (Linux/MacOS)

Check to see whether NodeJS is already installed by running `node --version`. If this returns a version, you already have NodeJS installed. We will be using v10.15.3, so please make sure you're using this version.

#### Install NodeJS using the Node Version Manager (NVM)

1. Open up a terminal
2. Get the installer script.
   ```sh
   $ curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh
   ```
3. Inspect the script you just downloaded by opening it with your favourite text editor (vim, vi, nano, et cetera...)
4. Once you are satisfied with the contents of the script, run it.
   ```sh
   $ bash install_nvm.sh
   ```
5. This script made some changes to your profile configuration. Reload the configuration.
   ```sh
   $ source ~/.bashrc
   ```
6. Verify nvm installed.
   ```sh
   $ nvm --version
   ```
7. Install the correct NodeJS version by running 
    ```sh
     $ nvm install 10.15.3
     ```
8. Verify the installation.
    ```sh
    $ node --version
    ```
9. Verify the package manager came with it.
    ```sh
    $ npm --version
    ```
10. Delete the nvm installer script.
    ```sh
    $ rm install_nvm.sh
    ```

### Setup instructions for Windows

#### Verify your environment

Check to see whether NodeJS is already installed by running `node --version` in the command prompt. If this returns a version, you already have NodeJS installed. We will be using v10.15.3, so please make sure you're using this version.

#### Install NodeJS v10.15.3 directly with msi file

1. Grab the Windows Installer from this link:
https://nodejs.org/dist/v10.15.3/node-v10.15.3-x86.msi

2. Run the installer and use all of the default settings for the install.

3. If the installer finishes without any errors, you should be good to go! You can verify the installation by running the command 
in the [Verify your environment](#verify-your-environment) section above.

---

## Run the Application
 
- Make sure you have already cloned the repository on your machine.
- Open a command prompt
- Change into the `cssa-website` directory
- Run the command `npm install`

```bash
git clone https://github.com/philnash/react-express-starter.git
cd react-express-starter
npm install
```

Create a `.env` file for environment variables in your server.

You can start the server on its own with the command:

```bash
npm run server
```

Run the React application on its own with the command:

```bash
npm start
```

Run both applications together with the command:

```bash
npm run dev
```

The React application will run on port 3000 and the server port 3001.


