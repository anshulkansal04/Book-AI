# Book AI

Converted the pricing table into responsive and interactive cards, and implemented a subscription section with email validation and user feedback using React.

## Table of Contents

- [Book AI](#book-ai)
  - [Table of Contents](#table-of-contents)
  - [Project Setup](#project-setup)
    - [1. Install Dependencies](#1-install-dependencies)
    - [2. Start the Development Server](#2-start-the-development-server)
  - [Features](#features)
  - [Customizations](#customizations)
    - [Subscription Section](#subscription-section)
    - [Pricing Section](#pricing-section)

## Project Setup

Follow these steps to set up and run the project locally.


### 1. Install Dependencies

Make sure you have Node.js installed on your machine. Then run the following command to install the necessary packages:

```
cd client
npm install
```

### 2. Start the Development Server

To start the project, run:

```
npm start
```

This will start the development server, and you can view the project in your browser at `http://localhost:3000`.

## Features

- **Subscription Section:** Users can enter their email to subscribe. The form includes validation to ensure a proper email format is entered.
- **Pricing Section:** The pricing section is designed with attractive cards, making it easy for users to understand the pricing of different models. Each card includes a model name, logo, and price per 1K tokens.

## Customizations

### Subscription Section

The subscription section has been enhanced with the following features:

- **Email Validation:** A validation check is added to ensure that the user inputs a valid email address. If the email is not valid, an error alert is shown using the `react-toastify` package.
- **Alert Notifications:** Based on the user's input, success or error alerts are shown using toastify. This ensures that users are aware of the status of their subscription attempt.

### Pricing Section

The pricing section has been modified from a table layout to a card layout:

- **Card Design:** The models are now displayed as individual cards, each containing the model name, logo, and pricing information. 
- **Hover Effect:** When users hover over a card, it slightly moves upward and displays a shadow effect, making the design interactive and appealing.
- **Responsive Design:** The layout is fully responsive, ensuring that the cards align properly across different screen sizes.
