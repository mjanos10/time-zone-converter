<template>
  <button class="btn btn-primary switch-btn" @click="switchValues">
    <chevrons-left-icon class="icon"></chevrons-left-icon>
    <span>Switch</span>
    <chevrons-right-icon class="icon"></chevrons-right-icon>
  </button>
</template>

<script>
import { ChevronsLeftIcon, ChevronsRightIcon } from "vue-feather-icons";
export default {
  components: {
    ChevronsLeftIcon,
    ChevronsRightIcon
  },
  methods: {
    switchValues() {
      this.$store.commit("SWITCH_FROM_TO");
    }
  }
};
</script>

<style scoped>
.switch-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.87em 1.5em;
}
</style>
