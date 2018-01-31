# ResumeChain

The purpose of ResumeChain is to create a working prototype of how Sovereign Identity tech can be leveraged to alleviate some of the burden of applying for a job as well as simplify verification of employment history.

**How uPort works**

In the most general sense, UPort at it's core works on three contracts;
1. Controller contract
2. Proxy contract
3. Application contract

ControllerContract(deviceid)>ProxyContract(userprivatekey)>ApplicatonContract(access)


 In very simple terms, Uport works by providing a digital middleman between a users private key via a proxy contract.

As illustrated above, the uPort mobile device app interacts with the Controller Contract, which sends the mobile address identifier to the proxy contract. The proxy contract matches the device id to a stored user private key, and sends the private key to the application contract. The application contract verifies the private key then sends a hash to some sort of storage "Infura IPFS"


**ResumeChain Concept**

1. A business registers with uPort and attaches the QR code for there company to an employees hiring form.
2. The employee who is already registered with uPort scans the QR code, which automatically time stamps the beginning date of employement on the blockchain for that company.

**NOTICE:** This repo is a basic prototype for a blockchain resume based system. for implementation it would require a couple of large hurdles to be overcome such as incentivizing employers to register with uPort. This could be accomplished by showing the lessening burden on HR for reference request etc..

**CODE Directory**

```
// Blockchain Integrations

/src/core/assimilation/ <----- Blockchain Integrations
/src/core/assimilation/fetching/uport <----- uPort Components
/src/core/assimilation/display/uport <----- uPort Containers
/src/core/assimilation/symbiosis/uport <----- uPort Blockchain Requests

// Application Demo Page Components

/src/application/interface/smithing/pages/Front
/src/application/interface/smithing/regions/RegionBranding
```




```

# Infrastructure

The Project has several important high-level folders.

- assembly <----- WebAssebmly/C++
- build <----- Deployable Assets
- configuration <----- Build Management
- contracts <----- Ethereum Smart Contracts
- documentation
- functions <----- Serverless Cloud Functions (Firebase)
- public <----- Static Entry
- scripts <----- Build Logic
- src <---- Primary Javascript

The ```src``` folder contains the root entry files for the application, extensions and page plugins.
The ```build``` folder contains the bundled/optimized entry files for the application, extension and embedable dapps.
The ```contracts``` folder contains application specific smart contracts.
The ```assembly``` folder contains application specific C++/Go/Rust for WebAssembly target ouput.
The ```embed``` folder contains modular components/mini-applications with 1 line Javascript embeds


## 1 Project - 3 Build Systems
#### Browser Application, Extension and Page Plugin
3 seperate build files can be generated from the project scaffolding.

1. Progressive Web Application
2. Chrome Browser Extension | Working
3. Embeddable Javascript | Barebones == Not Ready

The dApp Boilerplate will build 3 seperate Javascript "applications" from a few simple CLI commands.

```
yarn build
yarn extension
yarn embed
```

```
src
- application (src/application)
- extension (src/extension)
- embed (src/embed)
- core (src/core)

/*--- Interface ---*/
assembly: path.resolve(__dirname, '../src/core/assembly'),
assets: path.resolve(__dirname, '../src/core/assets'),
assimilation: path.resolve(__dirname, '../src/core/assimilation'),
components: path.resolve(__dirname, '../src/core/components'),
containers: path.resolve(__dirname, '../src/core/containers'),
entity: path.resolve(__dirname, '../src/core/entity'),
foundry: path.resolve(__dirname, '../src/core/foundry'),
forms: path.resolve(__dirname, '../src/core/forms'),
factory: path.resolve(__dirname, '../src/core/factory'),
workshop: path.resolve(__dirname, '../src/core/workshop'),
wrappers: path.resolve(__dirname, '../src/core/wrappers'),
```
The aliases provide a simply way for component developers to request shared component/containers within the application, extension and embed build process.
# ResumeChain
# ResumeChain

**CODE Directory**

```
// Blockchain Integrations

/src/core/assimilation/ <----- Blockchain Integrations
/src/core/assimilation/fetching/uport <----- uPort Components
/src/core/assimilation/display/uport <----- uPort Containers
/src/core/assimilation/symbiosis/uport <----- uPort Blockchain Requests

// Application Demo Page Components

/src/application/interface/smithing/pages/Front
/src/application/interface/smithing/regions/RegionBranding
```




```

# Infrastructure

The Project has several important high-level folders.

- assembly <----- WebAssebmly/C++
- build <----- Deployable Assets
- configuration <----- Build Management
- contracts <----- Ethereum Smart Contracts
- documentation
- functions <----- Serverless Cloud Functions (Firebase)
- public <----- Static Entry
- scripts <----- Build Logic
- src <---- Primary Javascript

The ```src``` folder contains the root entry files for the application, extensions and page plugins.
The ```build``` folder contains the bundled/optimized entry files for the application, extension and embedable dapps.
The ```contracts``` folder contains application specific smart contracts.
The ```assembly``` folder contains application specific C++/Go/Rust for WebAssembly target ouput.
The ```embed``` folder contains modular components/mini-applications with 1 line Javascript embeds


## 1 Project - 3 Build Systems
#### Browser Application, Extension and Page Plugin
3 seperate build files can be generated from the project scaffolding.

1. Progressive Web Application
2. Chrome Browser Extension | Working
3. Embeddable Javascript | Barebones == Not Ready

The dApp Boilerplate will build 3 seperate Javascript "applications" from a few simple CLI commands.
