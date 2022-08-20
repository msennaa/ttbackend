import Competition from "../database/models/Competition";

const { stub } = require('sinon');
const { expect } = require('chai');

describe('Testando a model de Competition', () => {
  describe('Testando o retorno do metodo getAll ', () => {
    it('Retorno da função', async () => {
      //arrange
      const input = [
        {
          id: 7,
          competitionName: "competição de softball",
          inProgress: true
        },
        {
          id: 8,
          competitionName: "competição de golf",
          inProgress: true
        }
      ]
      stub(Competition, "findAll")
        .returns(Promise.resolve(input))

      //act
      const result = await Competition.findAll();

      //assert
      expect(result).to.deep.equal(input);
      expect(result[0].competitionName).to.deep.equal('competição de softball');
    })
  })
  describe('Testando o retorno do metodo create ', () => {
    it('Retorno da função', async () => {
      //arrange
      const input = {
          id: 7,
          competitionName: "competição de softball",
          inProgress: true    
        }

      stub(Competition, "create")
        .returns(Promise.resolve(input))

      //act
      const result = await Competition.create({
          competitionName: "competição de softball",
      });

      //assert
      expect(result).to.deep.equal(input);
    })
  })
})