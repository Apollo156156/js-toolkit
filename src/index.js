class UtilityToolkit {
    // Function to capitalize the first letter of a string
    static capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Function to check if a number is even
    static isEven(num) {
        return num % 2 === 0;
    }

    // Function to check if a number is odd
    static isOdd(num) {
        return num % 2 !== 0;
    }

    // Function to generate a random integer between min and max (inclusive)
    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to shuffle an array
    static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

module.exports = UtilityToolkit;
