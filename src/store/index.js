import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        sidebar: {
            opened: !Cookies.get('sidebarStatus'), //opened 為1，代表sidebar關閉，opened為0，代表sidebar打開
            withoutAnimation: false
        },
        device: 'desktop'
    },
    mutations:{
        TOGGLE_SIDEBAR: state=>{
            if (state.sidebar.opened){
                Cookies.set('sidebarStatus', 1)
            }else{
                Cookies.set('sidebarStatus', 0)
            }
            state.sidebar.opened = !state.sidebar.opened
        },
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
            Cookies.set('sidebarStatus', 1)
            state.sidebar.opened = false
            state.sidebar.withoutAnimation = withoutAnimation
        },
        TOGGLE_DEVICE: (state,device) => {
            state.device
        }
    },
    actions:{
        ToggleSideBar: ({ commit }) => {
            commit('TOGGLE_SIDEBAR')
        },
        CloseSideBar: ({ commit }, { withoutAnimation }) => {
            commit('CLOSE_SIDEBAR',withoutAnimation)
        },
        ToggleDevice:({ commit }, device)=>{
            commit('TOGGLE_DEVICE',device)
        }
    },
    getters:{
        sidebar:state=>state.sidebar
    }

})
export default store