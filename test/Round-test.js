const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', () => {

let card1, card2, card3, deck, round

beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  deck = new Deck([card1, card2, card3])
  round = new Round(deck.cards);
})

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should hold a deck of cards', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  it('should show current card', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1)
  });

  it('should show how many turns have happened in the current round', () => {
    expect(round.turns).to.equal(0)
  })




})
