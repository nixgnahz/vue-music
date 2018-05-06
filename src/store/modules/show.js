export default {
  state: {
    showPlay: false,
    showList: false,
    showAdd: false,
    showMiniPlay: false,
    showSongs: false,
    activeIndex: 0
  },
  mutations: {
    changeShowPlay (state) {
      state.showPlay = !state.showPlay;
    },
    changeShowList (state) {
      state.showList = !state.showList;
    },
    changeShowAdd (state) {
      state.showAdd = !state.showAdd;
    },
    changeShowMiniPlay (state) {
      if(!state.showMiniPlay) state.showMiniPlay = !state.showMiniPlay;
    },
    changeActiveIndex (state, payload) {
      state.activeIndex = payload.index;
    }
  },
  actions: {
    changeShowPlay (context) {
      context.commit('changeShowPlay');
    },
    changeShowList (context) {
      context.commit('changeShowList');
    },
    changeShowAdd (context) {
      context.commit('changeShowAdd');
    },
    changeShowMiniPlay (context) {
      context.commit('changeShowMiniPlay');
    },
    changeActiveIndex (context, payload) {
      context.commit('changeActiveIndex', payload);
    }
  }
}
