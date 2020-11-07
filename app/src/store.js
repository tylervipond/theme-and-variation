import { createStore } from 'vuex'

export const ACTIONS_ACCEPT_WARNING = "ACTIONS_ACCEPT_WARNING";
export const ACTIONS_STOP_VIDEO = "ACTIONS_STOP_VIDEO";
export const ACTIONS_USER_INTERACT = "ACTIONS_USER_INTERACT";
export const ACTIONS_USER_INTERACTION_HALT = "ACTIONS_USER_INTERACTION_HALT";
export const GETTERS_PLAYING_VIDEO = "GETTERS_PLAYING_VIDEO";
export const GETTERS_SHOW_UI = "GETTERS_SHOW_UI";
export const MUTATIONS_VIDEO_STARTED = "MUTATIONS_VIDEO_STARTED";
export const MUTATIONS_VIDEO_STOPPED = "MUTATIONS_VIDEO_STOPPED";
export const MUTATIONS_USER_INTERACTED = "MUTATIONS_USER_INTERACTED";
export const MUTATIONS_USER_STOPPED_INTERACTING = "MUTATIONS_USER_STOPPED_INTERACTING";

const state = () => ({
    playingVideo: false,
    userInteracting: false,
});

const actions = {
    [ACTIONS_ACCEPT_WARNING]({ commit }) {
        commit(MUTATIONS_VIDEO_STARTED)
    },
    [ACTIONS_STOP_VIDEO]({ commit }) {
        commit(MUTATIONS_VIDEO_STOPPED)
    },
    [ACTIONS_USER_INTERACT]({ commit }) {
        commit(MUTATIONS_USER_INTERACTED)
    },
    [ACTIONS_USER_INTERACTION_HALT]({ commit }) {
        commit(MUTATIONS_USER_STOPPED_INTERACTING)
    }
}

const mutations = {
    [MUTATIONS_VIDEO_STARTED](state) {
        state.playingVideo = true
    },
    [MUTATIONS_VIDEO_STOPPED](state) {
        state.playingVideo = false
    },
    [MUTATIONS_USER_INTERACTED](state) {
        state.userInteracting = true;
    },
    [MUTATIONS_USER_STOPPED_INTERACTING](state) {
        state.userInteracting = false;
    }
};

const getters = {
    [GETTERS_PLAYING_VIDEO](state) {
        return state.playingVideo
    },
    [GETTERS_SHOW_UI](state) {
        return !state.playingVideo || state.userInteracting;
    }
}

export const store = createStore({
    state,
    actions,
    mutations,
    getters,
})