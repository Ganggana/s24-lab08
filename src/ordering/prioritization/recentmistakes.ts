import { CardStatus } from '../../cards/cardstatus'

export class RecentMistakesFirstSorter {
  reorganize(cards: CardStatus[]): CardStatus[] {
    const wrong: CardStatus[] = []
    const correct: CardStatus[] = []

    for (const card of cards) {
      const results = card.getResults()
      const last = results[results.length - 1]

      if (last === false) {
        wrong.push(card)
      } else {
        correct.push(card)
      }
    }

    return [...wrong, ...correct]
  }
}


export function newRecentMistakesFirstSorter(): RecentMistakesFirstSorter {
  return new RecentMistakesFirstSorter()
}