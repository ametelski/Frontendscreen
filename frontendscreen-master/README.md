# Front End Angular Screen

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0, developed in [Angular 4.0+](https://angular.io/) and uses 
[Angular Material](https://material.angular.io/) for reusable components and theming.  Depending on your experience with Angular, this project should take no more than an hour of your time.  **Your Task**: complete the following User Story:
 
### As a User, When I browse to the /vehicle-search URL, I see a list of vehicle cards that allow me to navigate to vehicle details.

#### Notes:
 - The vehicle-search component has already been scaffolded.  All your work should be completed in
 this component

#### Tasks:
 - Import the VehicleService and use the method getVehicles() to retrieve an array of vehicles
 - Create a Material Card to display each element in the array of vehicles:
 [![Vehicle Search Card](https://commondrivetimedev.blob.core.windows.net/screen/vehicle-card.png)](https://commondrivetimedev.blob.core.windows.net/screen/vehicle-card.png)
   - Display Title: Year Make DisplayName
   - Display SubTitle: BodyStyle
   - Image Thumbnail: Display an image on the right side of the Card. URL format for the image source is 'https://az30404.vo.msecnd.net/publicstockimages/' + StockNumber + '/' +
                                            StockNumber + '_FULL_LF-E.jpg'
   - Display a Card Actions Section with a "View Details" Button.  Clicking on the button should navigate to /vehicle-detail/{StockNumber}
 - Finally display a vertical list of the cards created with the results from getVehicles()

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


