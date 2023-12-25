import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  load() {
    return read()
      .then((result) =>
        json(result))
      .then((result) => {
        const saving = JSON.parse(result);
        return saving;
      })
      .then((saving) => {
        const savingObject = new GameSaving(saving.id, saving.created, saving.userInfo);
        return savingObject;
      })
      .catch((error) => {
        throw error;
      });
  }
}
