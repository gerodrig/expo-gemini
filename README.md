# Expo Gemini

This is a React Native application built with Expo that integrates with the Gemini API to provide various AI-powered features.

## Features

*   **Basic Prompt:** Send single-response queries to the Gemini API.
*   **Conversation History:** Maintain a history of your conversations with the Gemini API.
*   **Image Generation:** Generate images using the Gemini API.

## Tech Stack

*   **React Native:** A framework for building native apps using React.
*   **Expo:** A platform for making universal React applications.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **UI Kitten:** A React Native UI library that provides a set of customizable and reusable components.
*   **Zustand:** A small, fast and scalable bearbones state-management solution.
*   **Axios:** A promise-based HTTP client for the browser and node.js.
*   **Expo Router:** A file-based router for React Native and web applications.

## Getting Started

### Prerequisites

*   Node.js (v18 or newer)
*   Yarn or npm
*   Expo CLI

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/expo-gemini.git
    ```

2.  Install the dependencies:

    ```bash
    cd expo-gemini
    npm install
    ```

3.  Set up your environment variables. Create a `.env` file in the root of the project and add the following:

    ```bash
    EXPO_PUBLIC_GEMINI_API_URL=<your-gemini-api-url>
    ```

    You can find the template for the `.env` file in `.env.template`.

### Running the application

To run the application, use one of the following commands:

*   To run on iOS:

    ```bash
    npm run ios
    ```

*   To run on Android:

    ```bash
    npm run android
    ```

*   To run on the web:

    ```bash
    npm run web
    ```

## Project Structure

The project is structured as follows:

*   `actions`: Contains all the actions that can be dispatched from the components.
*   `app`: Contains all the screens of the application.
*   `assets`: Contains all the static assets of the application, such as images and fonts.
*   `components`: Contains all the reusable components of the application.
*   `constants`: Contains all the constants of the application, such as colors and themes.
*   `hooks`: Contains all the custom hooks of the application.
*   `interfaces`: Contains all the interfaces of the application.
*   `store`: Contains all the stores of the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.