# ✅ Elective Take Home (Engineering)

### Overview
I decided to model this as a SinInput component that contains SinDigit components for each digit in the SIN. It could have equally well been a single input box, but I thought there was some visual appeal to having each digit separated.

It is similar to some two factor auth components I've seen online that validate a numeric code emailed or texted to you.

The implementation uses localstorage to save the input whenever it changes so the data is not lost when the page is refreshed. It subscribes to storage events so when more than one tab or window is open the data is kept in sync between those pages.

The implementation of the Luhn Algorithm I wrote prioritizes readability and conciseness over speed and memory efficiency. It uses multiple loops to filter the input into even and odd groups, then do the summing. If the numbers were longer or we were doing some kind of batch processing of a large number of SINs I'd use an implementation that did the work in a single loop.
