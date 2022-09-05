<template>
  <div class="input-group">
    <div class="input-container">
      <label for="from">From</label>
      <select id="from" class="input input-currency" v-model="currencyCodeFrom">
        <option v-for="currency in currenciesOptions" :key="currency.code" :value="currency.code">
          {{ currency.code + " - " + currency.description }}
        </option>
      </select>
    </div>
    <button type="button" class="button" @click="switchCurrencyCodes">
      Switch
    </button>
    <div class="input-container">
      <label for="to">To</label>
      <select id="to" class="input input-currency" v-model="currencyCodeTo">
        <option v-for="currency in currenciesOptions" :key="currency.code" :value="currency.code">
          {{ currency.code + " - " + currency.description }}
        </option>
      </select>
    </div>
    <input style="display:none" type="date" id="date" class="input input-date" :max="yesterday" :min="lastYear"
      v-model="startDate" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { getDateBeforeDays } from "@/utils";
import { access } from "@babel/core/lib/config/validation/option-assertions";

export default {
  name: "InputGroup",
  data() {
    return {
      yesterday: getDateBeforeDays(1),
      lastYear: getDateBeforeDays(360),
    };
  },
  created() {
    this.getCurrenciesOptions()
    this.handleGetCurrencyRates();
  },
  switchRequest:false,
  methods: {
    ...mapActions(["getCurrenciesOptions", "getCurrencyRates"]),

    switchCurrencyCodes() {
      this.switchRequest = true
      this.currencyCodeTo = this.currencyCodeFrom;
      // this.currencyCodeFrom = temp;
    },
    handleGetCurrencyRates() {
      const { currencyCodeFrom, currencyCodeTo, startDate,switchRequest } = this;
      if(switchRequest && currencyCodeFrom === currencyCodeTo){
        switchRequest = false;
        return;
      }
      this.getCurrencyRates({
        from: currencyCodeFrom,
        to: currencyCodeTo,
        startDate,
      });
    },
  },
  watch: {
    currencyCodeTo(a,b) {
      this.currencyCodeFrom = b;
    }
  },

  computed: {
    ...mapState(["currenciesOptions"]),

    currencyCodeTo: {
      set(newValue) {
        this.$store.commit("setCurrencyCode", { newValue, key: "to" });
        this.handleGetCurrencyRates()
      },
      get() {
        return this.$store.state.currencyCode.to;
      },
    },
    currencyCodeFrom: {
      set(newValue) {
        this.$store.commit("setCurrencyCode", { newValue, key: "from" });
        this.handleGetCurrencyRates()
      },
      get() {
        return this.$store.state.currencyCode.from;
      },
    },
    startDate: {
      set(newValue) {
        this.$store.commit("setStartDate", newValue);
      },
      get() {
        return this.$store.state.startDate;
      },
    },
  },
};
</script>

<style scoped lang="scss">
.input-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: flex-start;
  margin: 1rem 0;
  padding: 0 1rem;
  color: #2c3e50;

  .input-container {
    text-align: left;

    >.input {
      width: 100%;
      margin: 1rem;
      margin-top: 0.5rem;
      margin-left: 0;
      height: 3rem;
      border-radius: 10px;
      font-size: 1rem;
      padding: 0 0.5rem;
      border: #d3dae8 solid 1px;

      &.input-currency {
        max-width: 500px;
      }
    }
  }

  >.button {
    width: 6rem;
    max-width: 200px;
    margin: 1rem;
    height: 3rem;
    padding: 0 0.5rem;
    color: #ffff;
    border-radius: 10px;
    background-color: #1868fb;
    border: #0446c1 solid 1px;
    transition: filter ease 200ms;

    &:hover {
      filter: brightness(110%);
    }
  }
}
</style>
