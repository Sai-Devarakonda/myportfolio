# Sai Harini Devarakonda — Portfolio

> Personal portfolio website for Sai Harini Devarakonda — Business Analyst & Project Manager. Built with Vue.js.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://harini-devarakonda.github.io/myportfolio/)
[![npm version](https://img.shields.io/badge/npm-6.14-orange?style=flat&logo=appveyor)](https://github.com/npm/cli)
[![vue dependency](https://img.shields.io/badge/vue-2.6.11-brightgreen?style=flat&logo=appveyor)](https://github.com/vuejs/vue)

💻 Live at [https://harini-devarakonda.github.io/myportfolio/](https://harini-devarakonda.github.io/myportfolio/)

---

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Connect](#connect)
- [License](#license)

---

## Installation 

### Dependencies
These are the local dependencies that are needed for development,

- npm
- git

### Clone

Get this repo to your local machine using,
```shell
$ git clone https://github.com/Harini-Devarakonda/myportfolio.git
```

### Setup 

To install the node packages used in the project:

```shell
$ cd portfolio-template
$ npm install
```

Compiles and hot-reloads for development

```shell
$ npm run serve
```

Compiles and minifies for production
```shell
$ npm run build
```

---

## Features 

A few notable elements that makes the website intuitive to use,
| # | Feature | Screenshot |
| - | - | - |
| 1 |**Timeline**: Educations and Experiences in a timeline format. Component: `/src/components/helpers/Timeline.vue`.| <img src="assets/timeline.png" width="800px"/> |
| 2 |**Skills**: Skills grouped with logos. Component: `/src/components/Skills.vue`.| <img src="assets/skills.png" width="800px"/> |
| 3 |**Portfolio**: Work samples with cards, modal dialogs, gallery, and an articles tab. Components: `/src/components/Portfolio.vue`, `/helper/Card.vue`, `/helper/Modal.vue`, `/helper/ArticleCard.vue`.| <img src="assets/portfolio.png" width="1800px"/> |
| 4 | **Contact:** A contact form has been added to recieve feedback or any sort of message. This form uses an API called [emailjs](https://www.emailjs.com/). A detailed guide to set up your own emailing service is mentioned below (don't worry, it's free). All the code for the contact form can be found in `src/components/Contact.vue`| <img src="assets/contact.png" width="1400px"/> |
 
--- 

## Usage 

This section goes over the tweaks that need to be made, and where can they be made. It also talks about the free emailing service that is been used.

### Information 

All the information on the template is present in `info.js` that can be found in the root directory. This consists of various parameters that handle the information on the website. All pictures are in `/src/assets`.

### Email.js 

The **contact** section of the template makes use of this API called [emailjs](https://www.emailjs.com/). It is a good service that provides 200 email free every month. You will need to configure your own emailjs account for the service to work.

#### Configuration
1. Head over to [emailjs](https://www.emailjs.com/) and create your account.
2. Once logged in, select a service. In my case I selected **gmail**.
3. Head over to **Email Templates** on the side and click on **Email Template Example**. Here, there are few changes to be made if you don't want to change the template's javascript code.
    - Change the subject attribute to: `New message from {{from_name}}!`
    - Change the body to, 
    ```js
    Hello {{to_name}},

    You got a new message from {{from_name}}:

    {{{message_html}}}

    My contact is: {{user_email}}.
    ```
    You can configure this however you want, but the attributes in the `{{ }}` need to be those.
4. Create a file called `config.js` in the root of the project. You'll notice that the `.gitignore` has the name of this file. This is where all the data that links your web app to emailjs will be stores.
5. Create a object that looks like this,
   ```js
   let config = {
        emailjs: {
            serviceID: '<serviceID>',
            templateID: '<templateID>',
            userID: '<userID>'
        }
    }

    export default config;
   ```
6. You need to get the above mentioned IDs from your emailjs account,
   - **serviceID**: From `Email Services`
   - **templateID**: From `Email Templates`
   - **userID**: From `Account` > `API Keys`

> Make sure your `config.js` is in `.gitignore` as you do not want to expose your keys to the public.

---

## Connect

Reach out to Sai Harini Devarakonda:

- Portfolio: <a href="https://harini-devarakonda.github.io/myportfolio/" target="_blank">harini-devarakonda.github.io/myportfolio</a>
- LinkedIn: <a href="https://www.linkedin.com/in/sai-harini-devarakonda/" target="_blank">linkedin.com/in/sai-harini-devarakonda</a>
- GitHub: <a href="https://github.com/Harini-Devarakonda" target="_blank">github.com/Harini-Devarakonda</a>

---

## License

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2026 © Sai Harini Devarakonda
