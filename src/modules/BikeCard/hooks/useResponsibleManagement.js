import { useQuery } from "react-query";
import { _ResponsibleCoursesApi } from "../../../../../../services/responsibleCourses/responsibleCourses.service";
import { useCourseStore } from "../../../../../../stores/useCoursesManagementStore";

// GET Courses based on category_id or all courses if category_id is not provided
export const useFetchCourses = (page, category_id) => {
  const setCourses = useCourseStore((state) => state.setCourses);
  const setIsFetching = useCourseStore((state) => state.setIsFetching);

  return useQuery(
    ["courses", page, category_id],
    () =>
      _ResponsibleCoursesApi
        .getCourses({
          page,
          query: "",
          filters: { category_id },
        })
        .then((res) => res),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setCourses(data);
        setIsFetching(false);
      },
      onError: () => {
        setIsFetching(false);
      },
      onSettled: () => {
        setIsFetching(false);
      },
    }
  );
};
