import {Cities, Sites, Categories, Infos, Adsenses} from './resources'

const ResourcesMap = new Map();

const api = (name) => {
  let resource = ResourcesMap.get(name);
  return {
    get: async(options) => {
      return await resource.get(options);
    },
    post: async(options, data) => {
      if (options != undefined && data != undefined) {
        return await resource.save(options, data)
      } else {
        return await resource.save(options)
      }
    },
    put: async(options, data) => {
      if (options != undefined && data != undefined) {
        return await resource.update(options, data)
      } else {
        return await resource.update(options)
      }
    },
    delete: async(options, data) => {
      if (options != undefined && data != undefined) {
        return await resource.delete(options, data)
      } else {
        return await resource.delete(options)
      }
    },

    query: async(options) => {
      return await resource.query(options);
    },
    save: async(options, data) => {
      if (options != undefined && data != undefined) {
        return await resource.save(options, data)
      } else {
        return await resource.save(options)
      }
    },
    update: async(options, data) => {
      if (options != undefined && data != undefined) {
        return await resource.update(options, data)
      } else {
        return await resource.update(options)
      }
    },
    remove: async(options, data) => {
      debugger;
      if (options != undefined && data != undefined) {
        debugger;
        return await resource.remove(options, data)
      } else {
        debugger;
        return await resource.remove(options)
      }
    }
  }
};

ResourcesMap.set("city", Cities);
ResourcesMap.set("site", Sites);
ResourcesMap.set("info", Infos);
ResourcesMap.set("categorie", Categories);
ResourcesMap.set("adsenses", Adsenses);

export default {
  City: api("city"),
  Site: api("site"),
  Info: api("info"),
  Adsenses: api("adsenses"),
  Categorie: api("categorie")
}
