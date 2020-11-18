import Repository from './Repository'

const resource = "/match";

export default {
    getMatchWinner(match_id) {
        return Repository.get(`${resource}/winner/${match_id}`);
    },
    getHeadshots(match_id) {
        return Repository.get(`${resource}/headshots/${match_id}`);
    },
    getMatchBestPlayer(match_id) {
        return Repository.get(`${resource}/best_player/${match_id}`);
    },
    getMatchTeamsBestPlayers(match_id) {
        return Repository.get(`${resource}/teams/best_player/${match_id}`);
    },
    getMatchTeams(match_id) {
        return Repository.get(`${resource}/teams/${match_id}`);
    },
    getRank(match_id) {
        return Repository.get(`${resource}/rank/${match_id}`);
    },

};