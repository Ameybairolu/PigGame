# PigGame
A game using JavaScript. The first player reaching score 50 wins.
(A self coded JavaScript game which is also a part of a Udemy course.)

How the game works ->

1. Whenever the game begins, we start off with player 1.
2. A Player keeps rolling the die until he clicks on 'Hold' or when he rolls 1. 
3. If a player clicks on 'Hold', then the 'current score' gets added to his overall score and then we check if the score is greater than or equal to 50. If so, the current player wins. Or else, the other player gets to roll the die now.
4. If a player rolls 1, the 'current score' of that player is lost, thus not being able to add to their overall score, and we switch to the other player. (Hence, it becomes important to hold else one can lose all the current score and bring 0 changes to their overall scores)
