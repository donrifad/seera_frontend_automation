# Frame Work Setup #
<br>This  automation framework is based on cypress and javascript</br>
<br>Mainly focused on ui web automation</br>

## Pre prerequisites ##
Install  node https://nodejs.org/en/download/

```
node --version

```

**Project Structure**
```
├── Readme.md
├── cypress
|  ├── downloads
|  ├── e2e                          => All test cases come under here
|  |  └── seera_e2e_spec.cy.js
|  ├── fixtures                     => Test data related to testing
|  |  ├── bookingdata.json
|  |  └── localization.json
|  ├── screenshots                  => Auto generated folder for cypress reporting
|  |  └── login_spec.cy.js
|  ├── support                      => Plugins and reusable commmands
|  |  ├── commands.js
|  |  ├── e2e.js
|  |  ├── pageObjects               => Pages and it's identifiers
|  |  └── utils                     => Utils or helpers related to testing
|  └── videos                       => Auto generated cypress videos
|     └── login_spec.cy.js.mp4
├── cypress.config.js               => All configurations and related env's
├── mochawesome-report              => Custom reporter adittions to cypress reporting
└── package.json                    => Project dependencies and execution commands
```

**Configurations**
<br>All configurations related to run time available on cypress.config.js 
<br>You can add your additional url's and enviroments here
```
env: {
    url: "https://almosafer.com/",
    lang: "arabic",
  },
```

**Project set up**
<br>Clone the project from the repo</br>
<br>Open the project from the editor </br>
<br>Go to terminal and install all required dependencies using package.json </br>
<br>Most of the time editor will install the dependencies automatically</br>
```
npm install
```
## Execute the tests locally in cypress dashboard ##
*  Navigate to root folder of your project
* Run the below command, It will open the cypress dashboard  click the spec file it will run the file

```
npx cypress open
```

## Execute the tests ##
* All good, after all dependancies are downloaded good to run the tests
* I have provided custom commands at paackage.json file,those commands readily available for use.These commands automatically generate a report on mochaawesome folder
    *   Commands run on chrome with arabic language
        ```
        npm run chromeheadTestAR
        ```
    *   Commands run on chrome with english language
        ```
         npm run chromeheadTestEng
        ```
    *  Commands to run headless english and arabic
        ```
         npm run headlessTestAR
        ```
        ```
        npm run headlessTestEN
        ```
* Also you can refer to the package.json for different commands available
* Also you can build your own command eg below . Also  visit https://docs.cypress.io/guides/guides/command-line#cypress-run
```
npx cypress run -b {browser} --headed --spec {your spec file} --env lang={language} --env url={url} --reporter mochawesome
```

* After completing the  test run mocha awesome reports looks like below.
<img width="1790" alt="Screenshot 2022-08-01 at 17 39 58" src="https://user-images.githubusercontent.com/5151534/182146828-b69a5286-d3f5-494b-84b8-6d0854678f9f.png">

