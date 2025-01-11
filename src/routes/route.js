import loadable from "@loadable/component";

export const AllBikesRouting = loadable(() =>
  import("../modules/responsibleCourses/BikeDetailsRouting")
);

export const BikeDetailsRouting = loadable(() =>
  import("../modules/BikeCardDetails/BikeCardDetailsRouting")
);
