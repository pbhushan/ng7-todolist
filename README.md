# NgCrashTodolist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## For PWA Implementation reference 


Step 1. Go to project folder and type > ng add @angular/pwa
Step 2. Adding manifest.json file to angular.json>inside assets section and index.html
Step3: Informing the User About a New Version
https://medium.com/poka-techblog/turn-your-angular-app-into-a-pwa-in-4-easy-steps-543510a9b626
https://dzone.com/articles/developing-pwa-using-angular-7
Step 4: install http-server for Pwa testing 
> sudo npm install -g http-server
> ng build —prod
> http-server -c-1 dist\ng-folder\


## To Create Models 
> ng g cl models/todo

## extensions for vscode 
Angular Extension pack by Mikael Morlund 
Angular 7 Snippets by Will - having some issues with [(ngModel)]

## For Angular Routing and PWA Offline check following link 

https://www.bennadel.com/blog/3545-enabling-the-second-click-of-a-routerlink-fragment-using-onsameurlnavigation-reload-in-angular-7-1-3.htm

  - Still having issue with PWA Offline 
  - reload offline issue with angular routing with http-server path: /*
    - fixed in app-routing.module with useHash:true and onSameUrlNavigation: 'reload'
    ** may need to rethink above solution.
