function Pallindrome(Pword){

    // const Wordsplit=Pword.split('');
    // const Reversesplitted=Wordsplit.reverse();
    // const ReverseWord=Reversesplitted.join('');

    const ReverseWord=Pword.split('').reverse().join('');

    if(ReverseWord==Pword){
        console.log('palindrome ahhh')
    }else{
        console.log('palindrome alla')
    }
}



// const Word= prompt('enter the word to check');
Pallindrome('dad');