<template>
  <div id="app">
    <main>
      <h1>Time-zone converter</h1>
      <div class="time-zones">
        <div class="time-zones__elem"><TimeZone fromOrTo="from" /></div>
        <div class="time-zones__switcher">
          <switch-button @click="doSomething" />
        </div>
        <div class="time-zones__elem"><TimeZone fromOrTo="to" /></div>
      </div>
      <div class="times">
        <TimeSelector />
        <CurrentTime />
      </div>
    </main>
  </div>
</template>

<script>
import TimeZone from "@/components/TimeZone.vue";
import TimeSelector from "@/components/TimeSelector.vue";
import CurrentTime from "@/components/CurrentTime.vue";
import SwitchButton from "@/components/SwitchButton.vue";

export default {
  name: "app",
  components: {
    TimeZone,
    SwitchButton,
    TimeSelector,
    CurrentTime
  },
  methods: {
    doSomething() {
      alert("YEAh");
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  color: #fff;
  text-align: center;
}

.time-zones__switcher {
  display: flex;
  justify-content: center;
  text-align: center;
}

.time-zones__switcher,
.time-zones__elem {
  padding: 0 1em;
  margin-bottom: 1em;
}

@media screen and (min-width: 600px) {
  .time-zones {
    display: flex;
    justify-content: center;
  }

  .time-zones__switcher {
    display: flex;
    align-items: flex-end;
    padding: 0;
    margin-bottom: 0;
  }

  .time-zones__elem {
    margin-bottom: 0;
  }
}

.times {
  padding: 1em;
  margin-top: 2em;
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
