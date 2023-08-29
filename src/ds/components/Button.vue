<template>
  <button
    :class="['cta-button', type && type, size && size]"
    :disabled="loading || disabled ? 'disabled' : undefined"
    @click="$emit('click')"
  >
    {{ label }}
    <div v-if="live" class="button-inLive"></div>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["label", "type", "size", "disabled", "loading", "live"],
};
</script>

<style>
button.cta-button {
  width: fit-content;
  min-width: 120px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 8px 8px 0 0;
  color: var(--dl-color-white);
  border-radius: 4px;
  transition: 0.2s;
  align-self: center;
  display: flex;
  z-index: auto;
  justify-content: center;
}
button.cta-button.cta-small {
  padding: 8px 12px;
  font-size: 10px;
}
button.cta-button.cta-regular {
  padding: 12px 24px;
  font-size: 12px;
}
button.cta-button.cta-big {
  padding: 18px 40px;
  font-size: 12px;
  margin: 16px 0 0;
}
button.cta-button.cta-primary {
  background-color: var(--dl-color-primary);
  --color: var(--dl-color-primary);
}
button.cta-button.cta-secondary {
  background-color: var(--dl-color-secondary);
  --color: var(--dl-color-secondary);
}
button.cta-button.cta-tertiary {
  background-color: var(--dl-color-red-dark);
  --color: var(--dl-color-red-dark);
}
button.cta-button.cta-alternative {
  background-color: transparent;
  color: var(--dl-color-white);
  border: 2px solid var(--dl-color-white);
}
button.cta-button.cta-alternative-red {
  background-color: transparent;
  color: var(--dl-color-primary);
  border: 2px solid var(--dl-color-primary);
  transition: all 1000ms !important;
  position: relative;
  overflow: hidden;
}
button.cta-button.cta-alternative-golden {
  background-color: transparent;
  color: var(--dl-color-secondary);
  border: 2px solid var(--dl-color-secondary);
}
button.cta-button.cta-alternative-green {
  background-color: transparent;
  color: var(--dl-color-green);
  border: 2px solid var(--dl-color-green);
}
button.cta-button.cta-alternative-black {
  background-color: transparent;
  color: var(--dl-color-red-dark);
  border: 2px solid var(--dl-color-red-dark);
}
button.cta-button:hover {
  -webkit-box-shadow: 0px 3px 8px 0px rgb(0 0 0 / 30%);
  -moz-box-shadow: 0px 3px 8px 0px rgb(0 0 0 / 30%);
  box-shadow: 0px 3px 8px 0px rgb(0 0 0 / 30%);
  transform: scale(1.02);
}
button.cta-button.cta-primary:disabled,
button.cta-button.cta-secondary:disabled,
button.cta-button.cta-tertiary:disabled {
  background-color: var(--dl-color-grey-mid);
}
button.cta-button.cta-primary:disabled:hover,
button.cta-button.cta-secondary:disabled:hover,
button.cta-button.cta-tertiary:disabled:hover,
button.cta-button.cta-alternative:hover,
button.cta-button.cta-alternative-red:hover,
button.cta-button.cta-alternative-golden:hover,
button.cta-button.cta-alternative-green:hover,
button.cta-button.cta-alternative-black:hover {
  box-shadow: none;
}
button.cta-button.cta-alternative:disabled,
button.cta-button.cta-alternative-red:disabled,
button.cta-button.cta-alternative-golden:disabled,
button.cta-button.cta-alternative-green:disabled,
button.cta-button.cta-alternative-black:disabled {
  color: var(--dl-color-grey-mid);
  border: 2px solid var(--dl-color-grey-mid);
}

button.cta-button.cta-alternative-red:hover {
  color: #f1f1f1 !important;
  background-color: var(--dl-color-grey-light) !important;
  transform: scale(1.1) !important;
  box-shadow: 4px 5px 17px -1px #b81c1c !important;
}
button.cta-button.cta-alternative-red::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: var(--dl-color-primary) !important;
  transform: skewX(45deg) !important;
  z-index: -1;
  transition: width 1000ms !important;
}
button.cta-button.cta-alternative-red:hover::before {
  width: 250%;
}

.button-inLive {
  animation: live 1.5s infinite 0.4s;
  background-color: white;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin: auto;
  margin-left: 10px;
}

@keyframes live {
  0% {
    background-color: white;
  }

  50% {
    background-color: var(--color);
  }

  100% {
    background-color: white;
  }
}

@media screen and (max-width: 480px) {
  button.cta-button.cta-primary {
    z-index: auto;
  }
  button.cta-button.cta-secondary {
    z-index: auto;
  }
  button.cta-button.cta-tertiary {
    z-index: auto;
  }
}
</style>
