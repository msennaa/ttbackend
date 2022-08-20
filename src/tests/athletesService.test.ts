import AthleteService from "../services/AthleteService";
const { stub } = require('sinon');
const { expect } = require('chai');
const service = new AthleteService();

describe('Testando a service de Athletes', () => {
  describe('Testando o retorno do metodo getAll ', () => {
    it('Retorna o array esperado', async () => {
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
      stub(service, "getAll")
        .returns(Promise.resolve(input))

      //act
      const result = await service.getAll();

      //assert
      expect(result).to.deep.equal(input);
      expect(result[0].athlete).to.deep.equal('Jarbas');
    })
  })
  describe('Testando o retorno do metodo registerAthlete ', () => {
    it('Retorno o atleta esperado', async () => {
      //arrange
      const input = {
          id: 18,
          athlete: "Normandia",
          value: "30",
          unity: "s",
          competitionId: 4
        }
  
      stub(service, "registerAthlete")
        .returns(Promise.resolve(input))

      //act
      const result = await service.registerAthlete(
        "Normandia",
        "30",
        "s",
        4
      );

      //assert
      expect(result).to.deep.equal(input);
    })
  })
})