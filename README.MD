# Stopwatch Implementation Approach

## 1. HTML Structure
   - Create a centered display using Bootstrap for minutes, seconds, and milliseconds.
   - Add three buttons for controlling the stopwatch: **Start**, **Stop**, and **Reset**.

## 2. JavaScript Setup
   - Select elements for time display and buttons using their IDs.
   - Initialize variables to track milliseconds, seconds, and minutes, as well as a flag to check if the stopwatch is running.

## 3. Timer Logic
   - Define a `timer` function that increments milliseconds.
   - Convert milliseconds to seconds every 100 ms and reset milliseconds.
   - Convert seconds to minutes every 60 seconds and reset seconds.
   - Update the display with the current values of minutes, seconds, and milliseconds.

## 4. Event Listeners
   - **Start Button**: Start the timer with `setInterval` only if it’s not already running.
   - **Stop Button**: Stop the timer by clearing the interval.
   - **Reset Button**: Clear the interval, reset all time variables to zero, and update the display to show "00:00:00".

## 5. Helper Function
   - Use a helper function to add a leading zero to single-digit time values for consistent display formatting.
