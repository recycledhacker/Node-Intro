const magicNumber = 13;

module.exports = {
    word: function(){
        return 'Everyone';
    },
    
    name: function(){
        return 'Gary-Man';
    },

    mysteryMultiplier(num){
        return num*magicNumber;
    }
}