import { shallowMount, createLocalVue } from '@vue/test-utils'
import BoardColumn from '@/components/BoardColumn.vue'
import { uuid } from '../../src/utils'
import defaultBoard from '../../src/default-board'
import Vuex from 'vuex';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex)

describe('BoardColumn.vue', () => {
  let mutations
  let store

  beforeEach(() => {
    mutations = {
      CREATE_TASK: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        board: defaultBoard
      },
      mutations
    })
  })

  it('renders props when passed', async () => {
    const wrapper = shallowMount(BoardColumn, { propsData: { 
      column: store.state.board.columns[0],
      columnIndex: 0, 
      board: store.state.board 
    },
    store, localVue });
    wrapper.find('input').setValue("input");
    wrapper.find('input').trigger('keyup.enter');
    await wrapper.vm.$nextTick();  
    expect(mutations.CREATE_TASK.mock.calls).toHaveLength(1);
    expect(wrapper.find('.column-name').text()).toBe(store.state.board.columns[0].name);
  })
})
