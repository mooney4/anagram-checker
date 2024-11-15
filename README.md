# Anagram Function

Description: This function will compare two strings and return true if they are an anagram of eachother, otherwise will return false.

## Limitations: 

The function is case-sensitive: Uppercase and lowercase characters are treated as different (e.g., 'A' and 'a' are not anagrams).
The function does not handle special characters such as punctuation or spaces. For example, 'angel!' and 'glean' would not be considered anagrams.
This function assumes that the inputs are valid strings (no null or undefined).

## Possible Improvements:

Convert both strings to lowercase before comparing to handle case insensitivity.
Remove non-alphabetic characters before comparison to handle strings with spaces or special characters (e.g., 'angel!' and 'glean').

## How to Run the Program

   1. Extract the ZIP file.
   2. Open a terminal, navigate to the project folder, and run:
   ```bash
   node anagram.js