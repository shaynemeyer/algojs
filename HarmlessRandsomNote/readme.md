# Harmless Ransom Note
Determine whether we have enough words in our magazine to create our note.

## Example 1
### Note:
'this is a secret note for you from a secret admirer'

### Magazine:
'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but not that it is not as hard as it seems this is my advice for you'

#### Result is False
We use the word secret twice in the note but it is only found once in the magazine.

## Complexity
Because there are 2 loops in this algorithm, loop over noteText and loop over magazineText the complexity is **Linear** or **O(n)**. You could also say the loop 1 is O(n) and loop 2 is **O(m)** or combined is **O(n+m)** or **O(n)**.