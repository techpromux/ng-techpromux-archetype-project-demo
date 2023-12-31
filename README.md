# TECHPROMUX ANGULAR ARCHETYPE PROJECT DEMO

<a alt="Techpromux logo" href="https://techpromux.com" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/26910051?s=200&v=4" width="45"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="55"></a>

✨ **Angular project generated by [Nx, a Smart, fast and extensible build system](https://nx.dev). Supported by [Techpromux Angular Archetype Project](https://github.com/techpromux/ng-techpromux-archetype-project).** ✨


## Start the app

To start the development server, run:

`npm install` 

`nx serve app`

Open your browser and navigate to:

[http://localhost:4200/](http://localhost:4200/)

Happy coding!

  ### NPM - read [Node.js docs](https://nodejs.org/es)

    npm install

  ###

    npm update --save

  ### NX - read [Nx docs](https://nx.dev/getting-started/tutorials/integrated-repo-tutorial)

    npx create-nx-workspace@latest

  ###

    nx generate @nx/angular:library

  ###

    nx build app

    nx run app:build

    nx run-many -t build --exclude demo

    npx nx affected -t build

  ###

    nx lint app

    nx run app:lint

    nx run-many -t lint --exclude demo

  ###

    nx test app

    nx run app:test

    npx nx affected -t test

  ###

    nx serve app

    npx nx serve app

    nx run-many -t serve --exclude demo
  ###

    nx graph

  ### CAPACITOR - read [Nxext docs](https://nxext.dev/docs/capacitor/getting-started.html) and [Capacitor docs](https://capacitorjs.com/docs) 

    npm install --save-dev --exact @nxext/capacitor

  ###

    nx build app

    nx generate @nxext/capacitor:capacitor-project --project app

    cd ./apps/app/

    npm install
    
  ###

    nx run app:add:android
    
    nx run app:add --platform android

    nx run app:cap --cmd="add android"

  ###

    nx run app:sync:android

    nx run app:sync --platform android

    nx run app:cap --cmd="sync android"

  ###


    nx run app:open:android

    nx run app:open --platform android

    nx run app:cap --cmd="open android"
    

  ### NX-PLUGIN - read [Nx recipes](https://nx.dev/extending-nx/recipes/local-executors)

    nx run app:nx-extract-i18n

    nx run app:nx-extract-i18n:en

    nx run app:nx-extract-i18n:es

    nx run app:nx-extract-i18n:all
