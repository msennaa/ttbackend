import CompetitionService from "../services/CompetitionService";

const { stub } = require('sinon');
const { expect } = require('chai');
const service = new CompetitionService();

describe('Testando a service de Competition', () => {
  describe('Testando o retorno do metodo enableAndDisableCompetition', () => {
    it('Retorno da mensagem esperada', async () => {
      //arrange
      const input = { message: "Finishing competition"}
      stub(service, "enableAndDisableCompetition")
        .returns(Promise.resolve(input))

      //act
      const result = await service.enableAndDisableCompetition(1, true);

      //assert
      expect(result).to.deep.equal(input);
    })
  })
  describe('Testando o retorno do metodo registerCompetition ', () => {
    it('Retorno da competição esperada', async () => {
      //arrange
      const input = {
          id: 7,
          competitionName: "competição de softball",
          inProgress: true    
        }

      stub(service, "registerCompetition")
        .returns(Promise.resolve(input))

      //act
      const result = await service.registerCompetition("competição de softball",);

      //assert
      expect(result).to.deep.equal(input);
    })
  })
})