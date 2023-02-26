import Config from "../config.json" assert {type: "json"};
import {ButtonBuilder} from "discord.js";
// experimental feature!
const { prefix, splitter } = Config;

class ButtonComponent extends ButtonBuilder {
  uid = null;
  guiData = null;
  constructor(guiData, key) {
    super();
    this.guiData = guiData;
    const data = guiData.dataManager.getData();
    const uid = Object.keys(data._components).length;
    this.uid = uid;
    data._components[uid] = {
      _key: key,
    };
    guiData.dataManager.saveData();
    super.setCustomId(this.getCustomId());
  }

  get params() {
    return this.guiData.dataManager.getData()._components[this.uid];
  }

  set params(params) {
    const data = this.guiData.dataManager.getData();
    const componentData = data._components[this.uid];
    const key = componentData._key;
    data._components[this.uid] = { _key: key, ...params };
    this.guiData.dataManager.saveData();
  }

  static async execute(guiData) {}

  static async checkUse(guiData) {
    const [_, uid] = guiData.getInteraction().customId.split(splitter);
    const data = guiData.dataManager.getData();
    const key = data._components[uid]._key;
    if (key === this.key) {
      const args = guiData.dataManager.getData()._components[uid];
      await this.execute(guiData, args);
    }
  }

  setCustomId(customId) {
    return super.setCustomId(this.getCustomId() + splitter + customId);
  }

  setParams(obj) {
    this.guiData.dataManager.getData()._components[this.uid] = {
      ...obj,
      ...this.params,
    };
    this.guiData.dataManager.saveData();
  }

  getCustomId() {
    return prefix + splitter + this.uid;
  }
}

export default ButtonComponent;
