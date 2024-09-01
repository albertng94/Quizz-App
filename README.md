Project to create a Quiz App (from the "React - The Complete Guide 2024 (incl. Next.js, Redux)" course from Maximilian Schwarzmüller in Udemy).

**About the project:** This project corresponds to section 12 of the mentioned course and was performed completely autonoumously by me with the exception of two features:
- The "index.css" file which came given as it was not the objective of the project to focus on the styling.
- The progress bar functionality ("Question" and "ProgressBar" components), for which I required to look into Maximilian's solution and take ideas to adapt it into mine, as I got stuck for a long period and was lacking some knowledge.

The main goal of the project was to create a Quiz-like web application which is controlled by a progress bar timer and passes through all the questions linearly to end up displaying a summary with the user's selections and results.

You can watch it live at: https://albertng94.github.io/Quizz-App/

**Result:**

![image](https://github.com/albertng94/Quizz-App/assets/120219974/767fce2a-30e8-4c67-a79c-33f5215543a8)
![image](https://github.com/albertng94/Quizz-App/assets/120219974/844f9c52-e102-4b0a-879c-1078bcba5e63)
![image](https://github.com/albertng94/Quizz-App/assets/120219974/6baf47d2-5acf-49d9-8920-e02918d0acc6)
![image](https://github.com/albertng94/Quizz-App/assets/120219974/7b2045e5-4dd8-42c1-ab7b-b8fe1d26f427)

**Built with:**
- HTML
- CSS
- JavaScript
- React

**Accomplishments:**
- Improved the knowledge of the "setTimeOut" and "setInterval" JavaScript methods.
- Learned about the Context API ("useContext" hook) to solve Prop Drilling.
- Learned about the importance of using the "useReducer" hook to simplify the code of state updating functions.
- Learned about the importance of using the "useEffect" and "useCallback" hooks to solve potentially dangerous side effects.
- Learned it is possible to use a "key" prop within a sub-component to update it completely when the parent component's state is updated, but only if the key's value changes.
