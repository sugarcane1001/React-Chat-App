
# Chat Application

A real-time chat application built with Next.js and Firebase, allowing users to communicate asynchronously.

## Features

- **Authentication**: Users can sign in with Google authentication.
- **Real-time Messaging**: Messages update in real-time using Firebase Firestore.
- **Responsive Design**: Designed with Chakra UI for responsiveness across devices.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Chakra UI](https://chakra-ui.com/)
- [React](https://reactjs.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js and npm installed on your machine
- Firebase project with Firestore and Authentication enabled

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/sugarcane1001/React-Chat-App
   ```

2. **Navigate into the project directory:**

   ```
   cd chat-app
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

4. **Set up Firebase configuration:**

- Create a Firebase project at Firebase Console.
- Copy Firebase configuration object from Firebase console.
- Create a `firebaseconfig.js` file in the root directory and paste the firebase configuration,

5. **Start the developement server:**

    ```
    npm run dev

    or

    yarn dev
    ```

6. Open browser and navigate to http://localhost:3000 to see the app running.

## Usage

- Sign in with Google using the provided button.
- Add receiver emails by clicking the `New Chat` button.
- Navigate through different chat rooms using the sidebar.
- Send messages in real-time and view them instantly.

## Demonstration

[![Alt text](https://img.youtube.com/vi/73h8_zsRBQM/0.jpg)](https://www.youtube.com/watch?v=73h8_zsRBQM)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
