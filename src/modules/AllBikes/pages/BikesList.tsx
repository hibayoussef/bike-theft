import { useEffect } from "react";
import BikeFilters from "../../../components/Filters/BikeFilter";
import useBikes from "../hooks/useBike";
import { useBikeStore } from "../../../store/useBikeStore";
import AllBikes from "../components/AllBikes";
import Loader from "../../../components/shared/Loader";
import { Typography } from "@mui/material";

const BikeList = () => {
  const {
    thefts,
    totalThefts,
    loading,
    error,
    currentPage,
    setCurrentPage,
    filters,
    setThefts,
    setError,
  } = useBikeStore((state) => state);

  const { refetch } = useBikes({
    query: filters.query,
    filters,
  });

  // دالة البحث لتحديث الاستعلامات والفلاتر
  const handleSearch = (
    searchQuery: string,
    dateRange: { start?: string; end?: string }
  ) => {
    useBikeStore.setState((state) => ({
      ...state,
      filters: {
        ...state.filters,
        query: searchQuery,
        dateRange,
      },
    }));
    setCurrentPage(1); // إعادة الصفحة إلى 1 عند البحث الجديد
    refetch();
  };

  // دالة تغيير الصفحة
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    refetch();
  };

  useEffect(() => {
    // عند حدوث خطأ
    if (error) {
      setError(error);
    }
  }, [error]);

  return (
    <div>
      {/* شريط الفلاتر */}
      <BikeFilters onSearch={handleSearch} />

      {/* عرض حالة التحميل */}
      {loading && <Loader />}

      {/* عرض الدراجات */}
      {/* {!loading && thefts.length > 0 && ( */}
        <AllBikes
          data={thefts}
          results_count={totalThefts}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      {/* )} */}

      {/* حالة الخطأ */}
      {!loading && error && (
        <Typography color="error">Error: {error}</Typography>
      )}

      {/* حالة عدم وجود بيانات */}
      {!loading && thefts.length === 0 && !error && (
        <Typography>No bike theft cases found.</Typography>
      )}
    </div>
  );
};

export default BikeList;
