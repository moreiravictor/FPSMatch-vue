import Repository from './Repository'

const resource = "/kills";

export default {
    getKillsDomains() {
        return Repository.get(`${resource}`);
    },
}