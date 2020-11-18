import Repository from './Repository'

const resource = "/weapons";

export default {
    getWeapons() {
        return Repository.get(`${resource}`);
    }
};