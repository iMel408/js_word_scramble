import random

# Create a function that reverses a word
def reverse_word(word):

    return word[::-1]

# print(reverse_word('melissa'))

# Create a function that takes an array of words and returns a new array of the
 # words with each word reversed.

def reverse_words(words):

    return [word[::-1] for word in words]

# print(reverse_words(['melissa', 'bonnie', 'linda', 'dave']))

 # Create a function that returns a random word from an array

def random_word(list):

    return random.choice(list)

# print(random_word(['melissa', 'arun', 'will', 'qiaozi']))

 # Create an array of words and save it to a variable. Using your functions create
 # a second array of reversed words.

words = ['melissa', 'arun', 'will', 'qiaozi']

def multi_task(words):

    return reverse_words(words) + words

# print(multi_task(words))

 # We could use the two arrays we've created to select a random word to show the user
 # and check their guess. How could we do that? Is there a better way?

def multitask_rand(words):

    return random_word(reverse_words(words) + words)

# print(multitask_rand(words))

 # ######################################
 # Create a function that takes an array of words and returns a map with the keys
 # as the reversed word and the values as the original word.

def create_dict(words):

    dict = {reverse_word(word):word for word in words}

    return dict

# print(create_dict(words))


 # Create a function that takes two strings, `guess` and `word` and a map, like
 # the one you created above. If the first string is in the map, return the word
 # if not, console log "Sorry, incorrect. The word was ..." and include word.

def guessing_game(guess,word,dict):

    if guess in dict.keys():
        return dict[guess]
    else:
        return "Sorry, incorrect. The word was {}".format(word)


# print(guessing_game('nura',random_word(words),create_dict(words)))
 # ######################################
 # FURTHER STUDY
 # Create a function that scrambles a word. Use whatever method you like to
 # rearrange the letters.
from random import shuffle

def word_scrable(word):

    word = list(word)
    shuffle(word)
    return ''.join(word)

# print(word_scrable('melissa'))
    
 # Create a function that takes an array of words and returns a map with the
 # scrambled words as the keys and the original word as the values.


def create_new_dict(words):

    dict = {word_scrable(word):word for word in words}
    return dict

print(create_new_dict(words))

    