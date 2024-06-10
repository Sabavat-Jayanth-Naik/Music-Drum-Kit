# Drum Kit

This is a simple interactive drum kit application built using HTML, CSS, and JavaScript. Users can play different drum sounds either by clicking the buttons on the screen or by pressing the corresponding keys on their keyboard.

## Features

- Play drum sounds by clicking on drum buttons.
- Play drum sounds by pressing keyboard keys.
- Visual feedback when a button is clicked or a key is pressed.

## Getting Started

### Prerequisites

To run this project, you only need a web browser.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/drum-kit.git
    ```
2. Navigate to the project directory:
    ```bash
    cd drum-kit
    ```

### Usage

1. Open the `index.html` file in your web browser.
2. Click on any drum button to play a sound.
3. Alternatively, press the following keys on your keyboard to play sounds:
    - `w`: Tom 4
    - `a`: Tom 3
    - `s`: Tom 2
    - `d`: Tom 1
    - `j`: Crash
    - `k`: Kick Bass
    - `l`: Snare
## preview
![Screenshot 2024-06-10 171011](https://github.com/Sabavat-Jayanth-Naik/Music-Drum-Kit/assets/130920035/65890424-7043-4d23-8a22-9fe4ceb9a246)

## Code Explanation

The main functionality is implemented in the JavaScript file. Here is a brief explanation of how the code works:

- The code adds event listeners to each drum button for the `click` event.
- It also adds an event listener for the `keypress` event to handle keyboard inputs.
- When a drum button is clicked or a corresponding key is pressed, the `makeSound` function is called to play the appropriate sound.
- The `animate` function adds a visual effect to the button when it is activated.


## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
