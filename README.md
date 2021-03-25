# 03-JavaScript-Password-Generator

## Link to Deployed Site

https://deucedadorian.github.io/03-JavaScript-Password-Generator/

## Description

This application is a password generator that will generate a random password of a chosen length, between 8 and 128 characters, with a character set determined by the user. The set can contain uppercase letters, lowercase letters, numbers and special characters. The set must contain one and if non are selected, it will generate a password with only special characters.
 
For this project, I used javascript to create a function which would ask the user questions about the parameters for the password they want to generate, then use their input to build an array of possible characters for there password. Once the array of possible characters is determined, another string is created with each index randomly given the value of one of the possible characters. The length of this second array is the length of the password the user chose. Once all of the indexes of the array have been assigned a value, this string is returned as the password.

## Table of contents

- [Usage](#usage)
- [Credits](credits)
- [License](#license)
- [Screenshots](#screenshots)

## Usage

Simply press the red 'Generate Password' botton. The function will run, asking the user a few questions about the password they want. After that, the password will be returned to the text field. The user can then select and copy the password to paste wherever they need the password entered.

## Credits

Most of the code in this app was given as starter code. I only created the function to generate the password. The rest of it I did not write.

## Screenshots

![Screenshot of deployed app](/Assets/_C__Users_Dylan_repos_Homework_03-JavaScript-Password-Generator_index.html.png)

![Screenshot of deployed app](/Assets/03-javascript-homework-demo.png)