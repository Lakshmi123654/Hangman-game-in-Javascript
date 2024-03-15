console.log ("\n\n\n\n\n\n\n\n\n\nWarm Welcome, to BJ Hangman Game !!") ;

let words = ["airplane", "zipper", "laptops", "snacks", "hangman", "solitude", "programming", "pneumonoultramicroscopicsilicovolcanoconiosis", "microsoft", "mobile", "coding", "dancer", "singer", "newton", "tesla", "einstein", "book", "delivery", "pizza", "burger", "javascript", "bed", "cot", "swing"] ;

let random_index = Math.floor (Math.random () * words.length) ;

let random_word = words [random_index] ;

console.log (`\nHere is a ${random_word.length} letter word.`) ;

let letter1 = prompt ("Please enter the first guess below : ") ;

if (random_word.includes (letter1))

{

	let i1 = random_word.indexOf (`${letter1}`) ;

	console.log (`The # ${Number (i1) + 1} letter is ${letter1}`) ;

}

else

{

	console.log (`The given letter ${letter1} is not there in my guess.`)

}

let letter2 = prompt ("Please enter the second guess below : ") ;

if (random_word.includes (letter2))

{

	let i2 = random_word.indexOf (`${letter2}`) ;

	console.log (`The # ${Number (i2) + 1} letter is ${letter2}`) ;

}

else

{

	console.log (`The given letter ${letter2} is not there in my guess.`)

}

let letter3 = prompt ("Please enter the third guess below : ") ;

if (random_word.includes (letter3))

{

	let i3 = random_word.indexOf (`${letter3}`) ;

	console.log (`The # ${Number (i3) + 1} letter is ${letter3}`) ;

}

else

{

	console.log (`The given letter ${letter3} is not there in my guess.`)

}

console.log ("\nNow, Guess my Word !") ;

let user_word = prompt ("Now, Guess my Word below ! : ") ;

if (user_word == random_word)

{

	console.log ("\nYOU ARE \"CORRECT\" !!") ;

}

else

{

	console.log ("\nYOU ARE \"WRONG\" ! TRY REFRESHING THE PAGE TO TRY AGAIN !")

}

