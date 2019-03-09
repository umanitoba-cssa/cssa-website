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

TODO

#### Install NodeJS v10.15.3 directly with msi file

Grab the Windows Installer from this link:
https://nodejs.org/dist/v10.15.3/node-v10.15.3-x86.msi

TODO: Someone who installs with Windows please expand these instructions.

---

## Run the Application

- Make sure you have already cloned the repository on your machine.
- Open a command prompt
- Change into the `cssa-website` directory
- Run the command `npm install`
- Run the command `npm start`
- Navigate to 127.0.0.1:3000 in your web browser.


