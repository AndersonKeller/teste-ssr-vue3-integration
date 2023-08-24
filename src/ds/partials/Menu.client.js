import { ref } from "vue";
export const result = ref("");
export function setName(name) {
  result.value = name;
  return result;
}
