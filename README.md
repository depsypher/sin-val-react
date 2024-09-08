# ✅ Elective Take Home (Engineering)

### Setup
* Run the following in this directory:
* `npm install`
* `npm run dev`
* Then go here in a browser:
* http://localhost:5173/

### Approach
My approach to this problem was to start with deciding what components needed to be built and coding them in rough form, then working on state management, then validation and unit tests, and finally UI polish.

### Overview
I decided to model this as a `SinInput` component that contains `SinDigit` components for each digit in the SIN, each one representing a separate input field. It could have equally well been a single input box, but I thought there was some visual appeal to having each digit separated.

It is similar to some two factor auth components I've seen online that validate a numeric code emailed or texted to you.

### Implementation
I wrote implementations in both React and Vue. Each implementation uses vite, vitest, typescript, tailwind, and daisyui.

I use localstorage to save the user input whenever it changes so the data is not lost when the page is refreshed. I subscribe to storage events so when more than one tab or window is open the data is kept in sync between those pages.

The implementation of the Luhn Algorithm I wrote prioritizes readability and conciseness over speed and memory efficiency. It filters the input into even and odd groups, then does the summing on those groups. If the numbers were longer or we were doing some kind of batch processing of a large number of SINs I'd use an implementation that did the work in a single loop for efficiency.

The unit tests are done in vitest. I test the following:
* An empty SIN is marked invalid.
* A valid SIN is marked valid.
* An invalid SIN is marked invalid.

I render two `SinInput` components on the page to demonstrate that the component is written to be reusable and that the state of each is independent of the other.

The page is responsive and the component is mobile friendly. At the smallest breakpoint the `(In)Valid SIN` text is removed, leaving only the valid/invalid icon so it will fit well on a phone sized screen. The input fields use `inputmode="numeric"` so that the keyboard will be numeric by default on a mobile device. I visually tested against Chrome/Brave, Firefox, and Safari on desktop and the iOS Simulator running iPad Pro and iPhone 15.
