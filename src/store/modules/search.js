import axios from 'axios'

export  default {
  state: {
    searchValue: "",
    showLoad: false,
    results: [],
    showEmpty: false,
    hot: ["病变", "说散就散", "空空如也", "周杰伦", "毛不易", "等你下课", "离人", "差一步"],
    history: []
  },
  mutations: {
    changeSearchValue (state, value) {
      state.searchValue = value;
      if(state.results.length) {
        state.results = [];
      }
      state.showEmpty = false;
    },
    getSearchResults (state) {
      if(!state.searchValue) return;
      state.showLoad = true;
      axios.get('http://musicapi.leanapp.cn/search?keywords=' + state.searchValue,{
        params: {
          limit: 30,
          offset: 1
        }
      }).then((res)=>{
        state.showLoad = false;
        if(res.data.result.songCount) {
          state.results = res.data.result.songs;
          state.showEmpty = false;
        } else{
          state.showEmpty = true;
        }
      }).catch((error)=>{
        console.log(error)
      })
    },
    addHistory (state) {
      if(!state.searchValue) return;
      for(let i = 0; i < state.history.length; i++) {
        if(state.history[i] == state.searchValue) {
          return;
        }
      }
      if(state.history.length >= 5) {
        state.history.splice(state.history.length - 1, 1);
        state.history.unshift(state.searchValue);
      } else{
        state.history.unshift(state.searchValue)
      }
    },
    removeHistory (state, index) {
      state.history.splice(index, 1);
    },
    emptyHistory (state) {
      state.history = [];
    }
  },
  actions: {
    changeSearchValue (context, params) {
      context.commit('changeSearchValue', params);
    },
    getSearchResults (context, params) {
      context.commit('getSearchResults', params);
    },
    addHistory (contetx) {
      contetx.commit('addHistory');
    },
    removeHistory (context) {
      context.commit('removeHistory');
    },
    emptyHistory (context) {
      context.commit('emptyHistory');
    }
  },
  getters: {
    show (state) {
      return (!state.results.length && !state.showEmpty)
    }
  }
}
