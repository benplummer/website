Ben Plummer Website
================

This is my personal website and blog which is powered by [Sculpin](https://sculpin.io).

Installation
------------

``` bash
composer install
./vendor/bin/sculpin generate --server --watch
```

The site will then be accessible at `http://localhost:8000/`.

Assets
------------

Follow the instructions [here](http://blog.npmjs.org/post/85484771375/how-to-install-npm) to install `npm`.

Once `npm` is installed, the following commands will install dependencies to a local `node_modules` folder:

``` bash
cd ./resources
npm install
```

Now you can run `gulp` to watch the scss files in the `scss` directory. This will regenerate the css if you make any changes.
