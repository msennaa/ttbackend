import Athlete from "../database/models/Athlete";
const { stub } = require('sinon');
const { expect } = require('chai');

describe('Testando a model de Athletes', () => {
  describe('Testando o retorno do metodo findAll ', () => {
    it('Retorno o array esperado', async () => {
      //arrange
      const input = [
        {
          athlete: 'Jarbas',
          value: '10',
          unity: 's',
          competition: {
            competitionName: "campeonato de yoga"
          }
        }
      ]
      stub(Athlete, "findAll")
        .returns(Promise.resolve(input))

      //act
      const result = await Athlete.findAll();

      //assert
      expect(result).to.deep.equal(input);
      expect(result[0].athlete).to.deep.equal('Jarbas');
    })
  })
  describe('Testando o retorno do metodo create ', () => {
    it('Retorno o atleta esperado', async () => {
      //arrange
      const input = {
          id: 18,
          athlete: "Normandia",
          value: "30",
          unity: "s",
          competitionId: 4
        }
  
      stub(Athlete, "create")
        .returns(Promise.resolve(input))

      //act
      const result = await Athlete.create({
        athlete: "Normandia",
        value: "30",
        unity: "s",
        competitionId: 4
      });

      //assert
      expect(result).to.deep.equal(input);
    })
  })
})