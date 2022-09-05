  <script >
  import { mapState } from "vuex";
  import { RouterLink, RouterView } from 'vue-router'
  import LineChart from "./components/LineChart/index.vue";
  import InputGroup from "./components/InputGroup/index.vue";

  import LoadingView from "./components/LoadingView/index.vue";
  export default {
    name: "App",
    components: { RouterLink, RouterView, InputGroup, LineChart, LoadingView },
    computed: {
      ...mapState(["chartData", "onLoading"]),
    },
  };
  </script>

  <template>
    <header>
      <div class="wrapper">
        <div id="app">
          <h1 class="title">Historical Currency Exchange Rates Chart</h1>
          <div class="box-container">
            <InputGroup />
            <div class="chart-container">
              <LoadingView :state="onLoading" />
              <!-- <LineChart v-if="chartData && !onLoading" :chartData="chartData" /> -->
              <LineChart v-if="chartData && !onLoading" :chartData="chartData" />
            </div>
          </div>
        </div>
      </div>
    </header>

  </template>

  <style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }
  h1.title{
    font-size: 38px;
  }
  .box-container{
    margin-top: 1rem;
    background-color: #ffffff;
    border: 1px solid #d3dae8;
    border-radius: 10px;
    overflow: hidden;
  }
  .chart-container{
    height: 400px;
  }
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
  </style>
