let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove last item from array
secretMessage.pop();

// Show the length of the array in the console
console.log(secretMessage.length)

// Add strings to the last index of the array
secretMessage.push('to', 'Program');
console.log('Array after push' + secretMessage);

// Change the 7th index to right
secretMessage[7] = 'right';
console.log('Array after replacing easily with right' + secretMessage);

// Remove the first item from the array
secretMessage.shift();
console.log('Array after removing first item' + secretMessage);

// Add 'Programming' as the element in the array
secretMessage.unshift('Programming');
console.log('Array after adding Programming as first item '+secretMessage);

// Remove strings and replace with another string
secretMessage.splice(6, 5, 'know');
console.log('Array after replacing some values with know ' + secretMessage);

// Use Join
console.log(secretMessage.join(' '));