import axios from "axios";

const BASE_URL = "https://bikeindex.org/api/v3";

const buildUrlWithFilters = (
  endpoint: string,
  {
    query = "",
    filters = {},
  }: {
    query?: string;
    filters?: {
      stolenness?: string;
      location?: string;
      dateRange?: { start?: string; end?: string };
    };
  }
): string => {
  const { stolenness = "all", location = "Munich", dateRange } = filters;

  let url = `${BASE_URL}/${endpoint}?location=${encodeURIComponent(
    location
  )}&stolenness=${stolenness}`;

  if (query) {
    url += `&query=${encodeURIComponent(query)}`;
  }

  if (dateRange?.start) {
    url += `&occurred_after=${Math.floor(
      new Date(dateRange.start).getTime() / 1000
    )}`;
  }

  if (dateRange?.end) {
    url += `&occurred_before=${Math.floor(
      new Date(dateRange.end).getTime() / 1000
    )}`;
  }

  return url;
};

export const _BikesApi = {
  /**
   * جلب العدد الإجمالي لحالات سرقة الدراجات بناءً على الفلاتر.
   */
  getCount: async ({
    query = "",
    filters = {},
  }: {
    query?: string;
    filters?: {
      stolenness?: string;
      location?: string;
      dateRange?: { start?: string; end?: string };
    };
  }) => {
    const url = buildUrlWithFilters("search/count", { query, filters });

    try {
      const response = await axios.get(url);
      return response?.data?.stolen || 0; // إرجاع العدد الإجمالي
    } catch (err) {
      console.error("Error fetching bike count:", err);
      throw err;
    }
  },

  /**
   * جلب قائمة حالات سرقة الدراجات بناءً على الصفحة والفلاتر.
   */
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
    const url =
      buildUrlWithFilters("search", { query, filters }) +
      `&page=${page}&per_page=10`;

    try {
      const response = await axios.get(url);
      return {
        bikes: response?.data?.bikes || [], // قائمة الدراجات
        total: response?.data?.total || 0, // العدد الإجمالي (إذا كان متاحًا)
      };
    } catch (err) {
      console.error("Error fetching bikes:", err);
      throw err;
    }
  },
};
