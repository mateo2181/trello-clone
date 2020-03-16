<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column,columnIndex) in board.columns"
        :key="columnIndex"
        :column="column"
        :columnIndex="columnIndex"
        :board="board"
      />
      <!-- Add Column -->
      <div class="column">
        <input
          class="bg-transparent outline-none block p-2 w-full"
          placeholder="+ enter new column"
          type="text"
          @keyup.enter="addColumn($event)"
        />
      </div>
    </div>

    <div class="task-bg" v-if="isTaskOpen" @click.self="close">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import BoardColumn from '@/components/BoardColumn';
export default {
  computed: {
    ...mapState(['board']),
    isTaskOpen() {
      return this.$route.name === 'task';
    }
  },
  components: {
    BoardColumn
  },
  methods: {
    close() {
      this.$router.push({ name: 'board' });
    },
    addColumn(event) {
      this.$store.commit('CREATE_COLUMN', {
        name: event.target.value
      });
      event.target.value = '';
    }
  }
};
</script>
<style lang="scss" scoped>
.board {
  @apply p-4 bg-blue-200 h-screen overflow-auto;
}

.column {
  @apply bg-gray-400 shadow rounded mx-2;
  min-width: 350px;
}

.task-bg {
  @apply fixed w-full h-full top-0 left-0 flex items-center justify-center;
  background: #0706062e;
}
</style>
