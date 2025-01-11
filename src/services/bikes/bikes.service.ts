import axios from "axios";

export const _BikesApi = {
  index: async ({
    page = 1,
    query = "",
    filters = {},
  }: {
    page?: number;
    query?: string;
    filters?: {
      stolenness?: string;
      location?: string;
      dateRange?: { start?: string; end?: string };
    };
  }) => {
    const {
      stolenness = "proximity",
      location = "Munich",
      dateRange,
    } = filters;

    let url = `https://bikeindex.org/api/v3/search?page=${page}&per_page=10&location=${location}&stolenness=${stolenness}`;

    if (query) {
      url += `&query=${encodeURIComponent(query)}`;
    }

    if (dateRange?.start || dateRange?.end) {
      if (dateRange.start) {
        url += `&occurred_after=${Math.floor(
          new Date(dateRange.start).getTime() / 1000
        )}`;
      }
      if (dateRange.end) {
        url += `&occurred_before=${Math.floor(
          new Date(dateRange.end).getTime() / 1000
        )}`;
      }
    }

    try {
      // إرسال الطلب باستخدام axios
      const response = await axios.get(url);
      console.log("response: ", response);
      return response?.data?.bikes || [];
    } catch (err) {
      console.error("Error fetching bikes:", err);
      throw err;
    }
  },
};
