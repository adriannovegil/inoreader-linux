# Inoreader for Linux

Inoreader for Linux is an unofficial desktop application of Inoreader.
It provides Linux users access to the Inoreader without using a web browser.
It offers every features of the web version of Inoreader including notifications.
It use nwjs to embed the web version in a window container and
some scripts to improve the user experience (Ex: Loader).

## Run it yourself

If you want to run it by yourself, please follow the following instructions.

### Clone the repo

    $ git clone git@github.com:adriannovegil/inoreader-linux.git
    $ cd inoreader-linux

### Install nw.js

Install locally to your project with: `npm install nw`

You can also install globally with `npm install nw -g` and then in any project type nw to run the project. Installing locally is recommended though as each project can have its own dependent version of nw.js

### Run project

Finally, you can run the app running the following command:

    $ ./node_modules/.bin/nw .

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!

## License

Licensed under the [GPL License Version 2](./LICENSE).
