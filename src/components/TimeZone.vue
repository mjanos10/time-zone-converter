<template>
  <div class="tz">
    <div class="tz__change">
      <label :for="identifier" class="tz__type">{{ fromOrTo }}</label>
      <select v-model="timeZone">
        <option
          :id="identifier"
          v-for="oneTz in timeZoneList"
          :key="oneTz.timeZone"
          :label="oneTz.text"
          :value="oneTz"
        >
          <div>{{ oneTz.timeZone }}</div>
          <div>{{ oneTz.formattedOffset }} - ({{ oneTz.abbreviation }})</div>
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fromOrTo: String
  },
  data() {
    return {
      date: new Date()
    };
  },
  computed: {
    identifier() {
      return "select-" + this.fromOrTo;
    },
    timeZoneList() {
      return this.$store.state.timeZoneList;
    },
    timeZone: {
      get() {
        if (this.fromOrTo === "from") {
          return this.$store.state.from;
        } else {
          return this.$store.state.to;
        }
      },
      set(selected) {
        if (this.fromOrTo === "from") {
          return this.$store.commit("SET_FROM", selected);
        } else {
          return this.$store.commit("SET_TO", selected);
        }
      }
    }
  }
};
</script>

<style scoped>
.tz {
  text-align: center;
}

.tz__type {
  display: block;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  font-weight: 700;
  color: #fff;
}
</style>
