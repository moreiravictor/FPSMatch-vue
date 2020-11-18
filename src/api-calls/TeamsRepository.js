import Repository from './Repository'

const resource = "/teams";

export default {
    getTeamsDomains() {
        return Repository.get(`${resource}`);
    }
};