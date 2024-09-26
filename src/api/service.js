import { ref } from "vue";
import axios from "axios";

export function useAPI() {
  const data = ref(null);
  const error = ref(null);

  const fetchData = async (url) => {
    error.value = null;

    try {
      const response = await axios.get(url);
      data.value = response.data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return {
    data,
    error,
    fetchData,
  };
}
