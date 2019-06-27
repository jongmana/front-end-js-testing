var expect = chai.expect;

describe("Opdracht 1 - De som functie", function() {
    it("de som van [0, 0] zou 0 moeten zijn", function() {
        expect(som([0, 0])).to.be.equal(0);
    });

    it("de som van [1, 1, 1] zou 3 moeten zijn", function() {
        expect(som([1, 1, 1])).to.be.equal(3);
    });

    it("de som van [-1, 1] zou 0 moeten zijn", function() {
        expect(som([-1, 1])).to.be.equal(0);
    });

    it("de som van ['a', 'b'] zou 0 moeten zijn", function() {
        expect(som(['a', 'b'])).to.be.equal(0);
    });

    it("de som van ['a', 2, 'b', 5] zou 7 moeten zijn", function() {
        expect(som(['a', 2, 'b', 5])).to.be.equal(7);
    });

});

describe("Opdracht 2 - De gemiddelde functie", function() {
    it("het gemiddelde van [0, 0] zou 0 moeten zijn", function() {
        expect(gemiddelde([0, 0])).to.be.equal(0);
    });
});