# Cosmic Wimpout Exercise

Implement a simplified version of a set of Cosmic Wimpout dice, as described
below. (Complete, official rules can be found [here][cosmic-wimpout].)

![Cosmic Wimpout](https://cf.geekdo-images.com/images/pic96687_md.jpg)

Our version should include indicating which dice are currently Frozen, and
four controls: One button to Stop, one button to Roll, one display for the
current turn's accrued Points, and one display for the player's Total score.

# Rules

Cosmic Wimpout is a classic "push your luck" game consisting of a set of five
dice:

- 4 with faces 2️⃣, 3️⃣, 4️⃣, 6️⃣, 5️⃣, 🔟
- 1 with faces 2️⃣, 4️⃣, 6️⃣, 5️⃣, 🔟, and *️⃣ (Typically this die is a different color.)

Players roll all of the dice, following the rules below to accrue points. Once
the player is satisfied with their total for the turn, they may Stop, add the
accrued points to their total for the game, and pass the dice to the next
player. If a player rolls a Wimpout (described below), their turn ends
immediately and all points accrued this turn are lost.

- After every roll, any dice currently worth points are Frozen and set aside.
  - If three of the dice just rolled match, they are worth 10 times their
    printed value (3️⃣ 3️⃣ 3️⃣ would be 3 × 10 or 30 points). _This is called a
    Flash_.
  - If not a part of a match, 5️⃣ and 🔟 are worth that many points.
  - The Flaming Sun, *️⃣, is "wild", and may represent any other face. If it is
    rolled with a pair, those three dice _must_ make up a Flash. You may treat
    the Flaming Sun as a 5️⃣ or a 🔟 (especially if that would prevent a Wimpout).
- You May Not Want To, But You Must: If at any point all of the dice are Frozen,
  you may not Stop, and all dice must be rolled again.
- The Futtless Rule: Following a Flash, you may not stop until more points are
  accrued. All non-scoring dice (that is, those not currently Frozen) must be
  rolled again.
- Wimpout: If _at any point_ none of the dice just rolled are worth points, that
  is a Wimpout: all points accrued during the turn are lost, and play proceeds
  to the next player.

The game ends once one player reaches a previously decided-upon total.

# Assets

For sake of providing the assets necessary, the following emoji can be used for
the faces of the dice (as they were in the Rules section, above):

| Emoji | Face |
|-------|------|
|  2️⃣  | The Two (Crescents) |
|  3️⃣  | The Three (Pyramids) |
|  4️⃣  | The Four (Lightning) |
|  6️⃣  | The Six (Stars) |
|  5️⃣  | The 5 |
|  🔟  | The 10 |
|  *️⃣  | The Flaming Sun |

# Extra Credit

- Keep track of two players' points, alternating the active player between them
  as they Stop.
- Opening Roll: Players must score at least 35 points to get in the game, and
  may not Stop until that many points are accrued.
- Last Licks: Once a player exceeds the target total, all other players get one
  more turn. Any player that fails to take over the lead is out of the game.
  Play continues until all players are out of the game; the highest score wins.
- The Futtless Rule generally contains a "reroll clause": If any of the dice
  rolled while trying to clear a Flash _match_ the Flash, they must be rerolled.
  This prevents a Wimpout, but does not prevent scoring points if, for example,
  the Flash included 5️⃣'s or 🔟's.
- Freight Train: If all five dice just rolled match, they are worth 100 times
  their printed value (4️⃣ 4️⃣ 4️⃣ 4️⃣ 4️⃣ would be 4 × 100 or 400 points). _This is
  called a Freight Train_.
  - If all five dice just rolled are 6️⃣, you win instantly.
  - If all five dice just rolled are 🔟, that is just Too Many Points (also
    called a Supernova), and you are out of the game.

[cosmic-wimpout]: http://cosmicwimpout.com/index.cfm?p=p.7
